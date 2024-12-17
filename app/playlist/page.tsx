"use client";
import React, { useState } from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddIcon from "@mui/icons-material/Add";
import styles from "../playlist.module.css";

export default function Playlist() {
  const [playlists, setPlaylists] = useState<
    { title: string; description: string }[]
  >([]);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Handlers
  const handleCreatePlaylist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      alert("Title and description cannot be empty.");
      return;
    }

    const newPlaylist = { title, description };
    setPlaylists([...playlists, newPlaylist]);

    // Reset inputs
    setTitle("");
    setDescription("");
    setIsPopupVisible(false);
  };

  const togglePopup = () => setIsPopupVisible((prev) => !prev);

  return (
    <>
      {/* Playlist Creation Button */}
      <div className={styles.playlist}>
        <button type="button" onClick={togglePopup}>
          <AddIcon sx={{ fontSize: 30 }} /> New Playlist
        </button>

        {/* Popup for Playlist Creation */}
        {isPopupVisible && (
          <div className={styles.pop_up}>
            <div className={styles.create}>
              <h1>New Playlist</h1>
              <div className={styles.title}>
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={styles.description}>
                <input
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className={styles.privacy}>
                <h5>Privacy</h5>
                <select>
                  <option>Public</option>
                  <option>Unlisted</option>
                  <option>Private</option>
                </select>
              </div>
              <div className={styles.cancel_create_btn}>
                <button onClick={togglePopup}>Cancel</button>
                <button onClick={handleCreatePlaylist}>Create</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Likes Section */}
      <div className={styles.User_liked}>
        <span>Your Likes</span>
        <p>
          <PushPinOutlinedIcon sx={{ fontSize: 10 }} /> Autoplaylist
        </p>
      </div>

      {/* Display Created Playlists */}
      <div className={styles.playlist_create}>
        {playlists.map((playlist, index) => (
          <div key={index} className={styles.playlist_item}>
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
