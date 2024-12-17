"use client";

import styles from "../render.module.css";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import LoopIcon from "@mui/icons-material/Loop";

export default function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextData, setNextData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [section, setSection] = useState("next");
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);
  const searchParam = useSearchParams();
  console.log("Search Param Name:", searchParam.get("name"));

  const songs = [
    {
      title: "jtrix",
      url: "https://www.youtube.com/embed/KIKLQNWYE10?controls=0",
      img: "https://i.ytimg.com/vi/KIKLQNWYE10/hqdefault.jpg",
    },
    {
      title: "ojlucifer",
      url: "https://www.youtube.com/embed/FYRdY-2U0gY?controls=0",
      img: "https://i.ytimg.com/vi/FYRdY-2U0gY/hqdefault.jpg",
    },
    {
      title: "jtix-gamble",
      url: "https://www.youtube.com/embed/9rYwruJkT80?controls=0",
      img: "https://i.ytimg.com/vi/9rYwruJkT80/hqdefault.jpg",
    },
  ];

  useEffect(() => {
    fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=50")
      .then((res) => res.json())
      .then((json) => setNextData(json.photos));

    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.ontimeupdate = () => setProgress(audio.currentTime);
      if (isPlaying) audio.play();
      else audio.pause();
    }
  }, [isPlaying]);

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const previousSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const currentSong = songs[currentSongIndex];
  const minutes = Math.floor(progress / 60);
  const seconds = Math.floor(progress % 60);

  return (
    <main className={styles.render_all}>
      <div className={styles.render}>
        <div className={styles.music_img}>
          <iframe
            width="900"
            height="400"
            src={currentSong.url}
            title={currentSong.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ borderRadius: "20px" }}
          ></iframe>
        </div>

        <div className={styles.tab}>
          <ul>
            <li onClick={() => setSection("next")} style={{ borderBottom: section === "next" ? "3px solid white" : "none" }}>UP NEXT</li>
            <li onClick={() => setSection("lyrics")} style={{ borderBottom: section === "lyrics" ? "3px solid white" : "none" }}>LYRICS</li>
            <li onClick={() => setSection("related")} style={{ borderBottom: section === "related" ? "3px solid white" : "none" }}>RELATED</li>
          </ul>

          <div className={styles.render_song_data}>
            {section === "next" && (
              <div className={styles.nextbox}>
                {nextData.map((data) => (
                  <div key={data.id} className={styles.box}>
                    <Image src={data.url} alt={data.title} width={50} height={50} />
                    <p>{data.title}</p>
                  </div>
                ))}
              </div>
            )}

            {section === "lyrics" && (
              <div className={styles.list}>
                {todos.map((todo) => (
                  <div key={todo.id}>
                    <span>{todo.title}</span>
                  </div>
                ))}
              </div>
            )}

            {section === "related" && <div className={styles.list}>No related content available</div>}
          </div>
        </div>
      </div>

      <footer>
        <div className="player-control">
          <div className="slider" style={{ width: `${progress * 7}px` }}></div>
          <div className="controls">
            <audio ref={audioRef} src="/song.mp3"></audio>
            <div className="controls-button">
              <SkipPreviousIcon onClick={previousSong} />
              <div onClick={togglePlayPause}>{isPlaying ? <PauseRoundedIcon /> : <PlayArrowIcon />}</div>
              <SkipNextIcon onClick={nextSong} />
            </div>
            <div className="render-song-name">
              <img src={currentSong.img} alt={currentSong.title} width={60} height={40} />
              <h3>{currentSong.title} is playing</h3>
            </div>
            <h3>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h3>
            <div className="share-tools">
              <ShuffleIcon />
              <LoopIcon />
              <div onClick={toggleMute}>
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
