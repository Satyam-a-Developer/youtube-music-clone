"use client";
import React from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import "../globals.css";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";

import styles from "../playlist.module.css"

export default function Playlist() {
  const [divs, setDivs] = useState([]);

  const handleClick = (e) => {
    e.preventDefault()
    setclick(false);
    console.log(title);
    const newDiv = (
      <div key={divs.length}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    );

    setDivs([...divs, newDiv]);
  };

  const PushPinOutlined = <PushPinOutlinedIcon sx={{ fontSize: 10 }} />;

  const create = () => {
    const newDiv = React.createElement(
      "div",
      { className: "new-div" },
      `${title}`
    );
    setcreatediv(newDiv);
  };
  const detail = (e) => {
    setdescription(e.target.value);
  };
  const newk = (e) => {
    settitle(e.target.value);
  };

  // setTimeout(handel,(1000);

  const [click, setclick] = useState(false);
  const [creatediv, setcreatediv] = useState(null);
  const [title, settitle] = useState(" ");
  const [description, setdescription] = useState(" ");
  const plus = <AddIcon sx={{ fontSize: 30 }} />;
  const toggleShow = () => {
    setclick(!click);
  };
  console.log(title);

  return (
    <>
      <div className={styles.playlist} >
        <button
          type="submit"
          onClick={() => {
            toggleShow();
          }}
        >
          {plus}New playlist
        </button>

        {click && (
          <div className={styles.pop_up}>
            <div className={styles.create}>
              <h1>New playlist</h1>
              <div className={styles.title}>
                <input
                  type="text"
                  alt="ebwewe"
                  placeholder="Title"
                  onChange={newk}
                />
              </div>
              <div className={styles.description}>
                <input
                  type="text"
                  alt="ebwewe"
                  placeholder="Description"
                  onChange={detail}
                />
                <br />
              </div>
              <div className={styles.privacy}>
                <h5>Privacy</h5>
                <select>
                  <option>Public</option>
                  <option>unlisted</option>
                  <option>Private</option>
                </select>
              </div>
              <div className={styles.cancel_create_btn}>
                <button
                  onClick={() => {
                    setclick(false);
                  }}
                >
                  cancel
                </button>
                <button onClick={handleClick}>create</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.User_liked}>
        <span>Your likes</span>
        <p>{PushPinOutlined}Autoplaylist</p>
      </div>
      <div className={styles.playlist_create}>
        {/* <div>
      <button onClick={handleClick}>Create New Div</button>
      {divs}
    </div> */}
        {divs}
        <br />
        {/* {descr} */}
        {creatediv}
      </div>
   
    </>
  );
}
