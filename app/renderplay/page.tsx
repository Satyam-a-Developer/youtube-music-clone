"use client";

import styles from "../render.module.css";
import { useSearchParams } from "next/navigation";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Image from "next/image";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import nanchaku from "../../public/nuks.mp3";
// import Holaamigo from "../../public/Hola amigo.mp3";
// import Lover from "../../public/Lover.mp3";

import SkipNextIcon from "@mui/icons-material/SkipNext";

import { Loop, Pause } from "@material-ui/icons";

import React, { useEffect, useState, useRef } from "react";

import { Palette } from "color-thief-react";
import { data } from "autoprefixer";

const Loading = () => <div>Loading...</div>;
export default function App() {
  useEffect(() => {
    fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=50"
    )
      .then((res) => res.json())
      .then((json) => setnextdata(json.photos));

    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  const searchparam = useSearchParams();
  console.log(searchparam.get("name"));
  const [player, setplayer] = useState();
  const [reverseobj, setreverseobj] = useState();
  const [objimage, setobjimage] = useState();
  const [reversecount, setreversecount] = useState(5);
  const [count, setcount] = useState(0);
  const [title, settitle] = useState(" ");
  const [todos, setTodos] = useState([]);
  const [width2, setwidth] = useState();
  const [icons, seticons] = useState(<PauseRoundedIcon />);
  const [nextdata, setnextdata] = useState([]);
  const [music, setmusic] = useState();
  const [data1, setdata] = useState();
  const [Lyrics, setLyrics] = useState(false);
  const [next, setnext] = useState(true);
  const [related, setrelated] = useState(false);

  if (typeof window === "undefined") {
    console.log("window is undefined");
  }

  const Shuffle = <ShuffleIcon />;
  const Mloop = <Loop />;
  const volume = <VolumeUpIcon />;
  const skip = <SkipNextIcon />;
  const Skipicon = <SkipPreviousIcon />;

  const handleStateChange = (stateName, newValue) => {
    if (stateName === "next") {
      setnext(newValue);
      if (newValue) {
        setLyrics(false);
        setrelated(false);
      }
    } else if (stateName === "Lyrics") {
      setLyrics(newValue);
      if (newValue) {
        setnext(false);
        setrelated(false);
      }
    } else if (stateName === "related") {
      setrelated(newValue);
      if (newValue) {
        setnext(false);
        setLyrics(false);
      }
    }
  };

  // var music2 = document.querySelector("audio");

  // if (music2) {
  //   music2.ontimeupdate = function () {
  //     myFunction();
  //   };

  // function myFunction() {
  //   // Display the current position of the video in a p element with id="demo"
  //   setwidth(music2.currentTime);
  // }
  // } else {
  // music2 is null
  // console.log("music2 is null");
  // }

  let m = Math.floor((width2 % 3600) / 60);
  let s = Math.floor((width2 % 3600) % 60);

  const [isplaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isplaying) {
        seticons(<PauseRoundedIcon />);

        audioRef.current.play();
      } else {
        seticons(<PlayArrowIcon />);

        audioRef.current.pause();
      }
    }
  }, [isplaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isplaying);
  };

  const forwardobject = () => {
    let arr = [
      "jtrix",
      "ojlucifer",
      "jtix-gamble",
      "kalamink-streetflow",
      "jtrix-iwish",
      "A1&j1",
    ];
    let ik = 0;
    let playerobj = {
      jtrix: (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/KIKLQNWYE10?si=Edxfw5uDdkRm2p__&amp;controls=0"
          img="https://i.ytimg.com/vi/KIKLQNWYE10/hqdefault.jpg"
          title="jtrix"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      ojlucifer: (
        <iframe
          width="660"
          height="500"
          img="https://i.ytimg.com/vi/FYRdY-2U0gY/hqdefault.jpg"
          src="https://www.youtube.com/embed/FYRdY-2U0gY?si=t4IMW4HOrbRFvqRU&amp;controls=0"
          title="ojlucifer"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "jtix-gamble": (
        <iframe
          width="660"
          height="500"
          img="https://i.ytimg.com/vi/9rYwruJkT80/hqdefault.jpg"
          src="https://www.youtube.com/embed/9rYwruJkT80?si=9J1ri7tnYodGrqzf&amp;controls=0"
          title="jtix-gamble"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "kalamink-streetflow": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/RI0y2YknikI?si=CKEOSEZy0wcIZKN7&amp;controls=0"
          img="https://i.ytimg.com/vi/RI0y2YknikI/hqdefault.jpg"
          title="kalamink-streetflow"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "jtrix-iwish": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/RuKfKMxyezc?si=MhF8SGXOJsIQLQPF&amp;controls=0"
          img="https://i.ytimg.com/vi/RuKfKMxyezc/hqdefault.jpg"
          title="jtrix-iwish"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "A1&j1": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/KIKLQNWYE10?si=Edxfw5uDdkRm2p__&amp;controls=0"
          img="https://i.ytimg.com/vi/KIKLQNWYE10/hqdefault.jpg"
          title="A1&j1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    };
    ik++;
    if (count < 5) {
      setcount(count + 1); // Increment the count by 1
    }
    console.log(playerobj[arr[count]].props.src);
    console.log(playerobj[arr[count]].props.title);
    setplayer(playerobj[arr[count]].props.src);
    settitle(playerobj[arr[count]].props.title);
    // console.log(ik);
    console.log(count);
    setobjimage(playerobj[arr[count]].props.img);
    // console.log(arr[ik]);
  };
  const backwordobject = () => {
    let arr = [
      "jtrix",
      "ojlucifer",
      "jtix-gamble",
      "kalamink-streetflow",
      "jtrix-iwish",
      "A1&j1",
    ];
    let ik = 0;
    let playerobj = {
      jtrix: (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/KIKLQNWYE10?si=Edxfw5uDdkRm2p__&amp;controls=0"
          img="https://i.ytimg.com/vi/KIKLQNWYE10/hqdefault.jpg"
          title="jtrix"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      ojlucifer: (
        <iframe
          width="660"
          height="500"
          img="https://i.ytimg.com/vi/FYRdY-2U0gY/hqdefault.jpg"
          src="https://www.youtube.com/embed/FYRdY-2U0gY?si=t4IMW4HOrbRFvqRU&amp;controls=0"
          title="ojlucifer"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "jtix-gamble": (
        <iframe
          width="660"
          height="500"
          img="https://i.ytimg.com/vi/9rYwruJkT80/hqdefault.jpg"
          src="https://www.youtube.com/embed/9rYwruJkT80?si=9J1ri7tnYodGrqzf&amp;controls=0"
          title="jtix-gamble"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "kalamink-streetflow": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/RI0y2YknikI?si=CKEOSEZy0wcIZKN7&amp;controls=0"
          img="https://i.ytimg.com/vi/RI0y2YknikI/hqdefault.jpg"
          title="kalamink-streetflow"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "jtrix-iwish": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/RuKfKMxyezc?si=MhF8SGXOJsIQLQPF&amp;controls=0"
          img="https://i.ytimg.com/vi/RuKfKMxyezc/hqdefault.jpg"
          title="jtrix-iwish"
          style={{ borderRadius: 20 }}
        ></iframe>
      ),
      "A1&j1": (
        <iframe
          width="660"
          height="500"
          src="https://www.youtube.com/embed/KIKLQNWYE10?si=Edxfw5uDdkRm2p__&amp;controls=0"
          img="https://i.ytimg.com/vi/KIKLQNWYE10/hqdefault.jpg"
          title="A1&j1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
    };
    ik++;
    if (count > 0) {
      setreversecount(reversecount - 1); // Increment the count by 1
    }
    console.log(playerobj[arr[reversecount]].props.src);
    console.log(playerobj[arr[reversecount]].props.title);
    setplayer(playerobj[arr[reversecount]].props.src);
    settitle(playerobj[arr[reversecount]].props.title);
    // console.log(ik);
    console.log(reversecount);
    // console.log(arr[ik]);
    setobjimage(playerobj[arr[reversecount]].props.img);
  };

  const imgSrc =
    "https://images.pexels.com/photos/18772233/pexels-photo-18772233/free-photo-of-boat-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <main>
      <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
        {({ data, loading }) => {
          // console.log(ak1)
          if (loading) return <Loading />;
          let arr = [];

          return (
            <div>
              <ul>{data.map((color, index) => arr.push(color))}</ul>
              {
                <main>
                  <div
                    className={styles.render_all}
                    style={{
                      background: `linear-gradient(${arr[0]},0%, ${arr[1]},50%,${arr[2]})`,
                    }}
                  >
                    <div className={styles.slidebarforloader}>
                      <div className={styles.render}>
                        <div className={styles.loder}>
                          <div className={styles.music_img}>
                            <iframe
                              width="900"
                              height="600"
                              src={player}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                          </div>
                        </div>
                        {/* <page />  */}
                        <div className={styles.up_next_bar}>
                          <div className={styles.tab}>
                            <ul>
                              <li
                                onClick={() => handleStateChange("next", true)}
                                style={{
                                  borderBottom: next
                                    ? "3px solid white"
                                    : "none",
                                }}
                              >
                                UP NEXT
                              </li>
                              <li
                                onClick={() =>
                                  handleStateChange("Lyrics", true)
                                }
                                style={{
                                  borderBottom: Lyrics
                                    ? "3px solid white"
                                    : "none",
                                }}
                              >
                                LYRICS
                              </li>
                              <li
                                onClick={() =>
                                  handleStateChange("related", true)
                                }
                                style={{
                                  borderBottom: related
                                    ? "3px solid white"
                                    : "none",
                                }}
                              >
                                RELATED
                              </li>
                            </ul>
                            <div className={styles.render_song_data}>
                              <div className={styles.current_playing_song}>
                                <div className={styles.name}>
                                  <span>playing from</span>
                                  <br />
                                  <span>Liked Music</span>
                                </div>

                                <button>Save+</button>
                              </div>
                              {next && (
                                <div className={styles.nextbox}>
                                  {nextdata.map((data) => (
                                    <div key={data.url} className={styles.box}>
                                      <Image
                                        src={data.url}
                                        alt="dwadwad"
                                        width={30}
                                        height={40}
                                      />
                                      <p>{count}</p>
                                      <p>{reversecount}</p>

                                      <p key={data.title}> {data.title}</p>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {related && (
                                <div className={styles.list}>
                                  we cant find right now
                                </div>
                              )}

                              {Lyrics && (
                                <div className={styles.list}>
                                  {todos.map((todo) => (
                                    <div key={todo.title}>
                                      <span key={todo.title}>{todo.title}</span>
                                    </div>
                                  ))}
                                  {/* <h5>{data1}</h5> */}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <footer>
                      <div
                        className="player-control"
                        // style={{ marginTop: width }}
                      >
                        <div className="slider" style={{ width: width2 * 7 }}>
                          <div
                            className="reddot"
                            style={{
                              left: width2 * 7,
                            }}
                          ></div>
                        </div>
                        <div className="controls">
                          {/* <audio ref={audioRef} src={Lover}></audio> */}

                          <div className="controls-button">
                            <div className="forward" onClick={backwordobject}>
                              {Skipicon}
                            </div>
                            <div className="pause" onClick={handlePlayPause}>
                              {icons}
                            </div>
                            <div className="backward" onClick={forwardobject}>
                              {skip}
                            </div>
                          </div>

                          <div className="render-song-name">
                            {/* {title} */}
                            {/* // image of song playing */}
                            <img src={ objimage } alt="nothing playing" width={60} height={40} />
                            <h3>{title} is playing</h3>
                          </div>

                          <h3>
                            {m}:{s}
                          </h3>
                          <div className="share-tools">
                            <div className="shuffle">{Shuffle}</div>
                            <div className="loop">{Mloop}</div>
                            <div className="volume">{volume}</div>
                          </div>
                        </div>
                      </div>
                    </footer>
                  </div>
                </main>
              }
            </div>
          );
        }}
      </Palette>
      {/* <img src={imgSrc} alt="" /> */}
    </main>
  );
}
