"use client";

// import "../globals.css";

import styles from "../static.module.css";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Image from "next/image";
import Playlist from "../playlist/page"
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from "react";

import { usePathname } from "next/navigation";

// import First from "./link/page"
import Link from "next/link";
// import { useState } from "react";
import LibraryMusicIconfill from "@mui/icons-material/LibraryMusic";
import ExploreIconfill from "@mui/icons-material/Explore";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import LoopIcon from "@mui/icons-material/Loop";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import line from "../../public/3line.png";
import HomeIconfill from "@mui/icons-material/Home";

import SkipNextIcon from "@mui/icons-material/SkipNext";

import PauseIcon from "@mui/icons-material/Pause";

import user from "../../public/youtube-music.png";
import AddIcon from "@mui/icons-material/Add";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicOutlined";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";

import HomeIcon from "@mui/icons-material/HomeOutlined";
import { Icon } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Loop, Pause } from "@material-ui/icons";
import { shuffle } from "gsap";
import { Input } from "postcss";

export default function Page() {
  const pathname = usePathname();
  function onSubmit() {
    console.log("dwda");
  }
  // const playlist = <playlist/>
  // const pause = <Pause/>;
  // const Shuffle = <ShuffleIcon/>
  // const Mloop = <Loop/>
  // const volume = <VolumeUpIcon/>
  // const skip = <SkipNextIcon/>
  // const Skipicon = <SkipPreviousIcon/>
  const fillhome = <HomeIconfill sx={{ fontSize: 30 }} />;
  const close = <CloseIcon />
  const ReorderIcon2 = <ReorderIcon sx={{ fontSize: 30 }} />
  const explorefill = <ExploreIconfill sx={{ fontSize: 30 }} />;
  const libraryfill = <LibraryMusicIconfill sx={{ fontSize: 30 }} />;
  const statusImage = <HomeIcon sx={{ fontSize: 30 }} />;
  const plus = <AddIcon sx={{ fontSize: 30 }} />;
  const PushPinOutlined = <PushPinOutlinedIcon sx={{ fontSize: 10 }} />;
  const search = <SearchIcon sx={{ fontSize: 30 }} />;
  const library1 = <LibraryMusicIcon sx={{ fontSize: 30 }} />;
  const explore1 = <ExploreIcon sx={{ fontSize: 30 }} />;

  const [explore, setexplore] = useState(false);
  const [icon, setIcon] = useState(false);
  const [closeicon, setcloseicon] = useState(false);
  const [library, setlibrary] = useState(false);

  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  };
  const toggleIcon = () => {
    setIcon(!icon);
  };
  const toggleIcon1 = () => {

    if (pathname === "/home") {
      setIcon(icon);
    }
    // setIcon(icon);
  };
  const libraryicon = () => {
    setlibrary(!library);
  };

  const exploreicon = () => {
    setexplore(!explore);
  };

  const closeicon2 = () => {
    setcloseicon(!closeicon)
  }
  const delete2 = () => {

    setShow(false);
  }
  return (
    <main >
      <header>
        <div className={styles.top}>
          <div className="icon" onClick={toggleShow}>
            {/* <div className="icon" onClick={toggleShow}> */}
            <br />
            <div onClick={closeicon2}>
              {/* <div> */}
              {closeicon ? close : ReorderIcon2}
            </div>

          </div>
          <div className={styles.logo} >
            <Image src={"https://music.youtube.com/img/on_platform_logo_dark.svg"} width={80} height={30} alt="" />

          </div>
          <div className={styles.searchbar}>
            <form>
              <input
                type="text"
                name="name"
                placeholder="Search songs,album,artist,podcasts"
              />
            </form>
          </div>

          <div className={styles.User}>
            <div className={styles.profile}>
              <Image src={user} width={30} height={30} alt="" />
            </div>
          </div>
        </div>
        <hr></hr>
      </header>
      {/* style={{ display: show ? 'block' : 'none' }} */}
      <div className={styles.slidebarforloader} style={{ display: show ? 'block' : 'none' }} >
        {show && <div className={styles.slidebar} >
          <div className={styles.top_slidebar}>
            <Link href="/home">
              <div className={styles.home} onClick={toggleIcon1}>

                {icon ? fillhome : statusImage}
                <h3>
                  Home

                </h3>
              </div>
            </Link>
            <Link href="/explore">
              <div className={styles.explore} onClick={exploreicon}>
                {explore ? explorefill : explore1}
                <h3>
                  Explore
                </h3>
              </div>
            </Link>
            <Link href="/Library">
              <div className={styles.library} onClick={libraryicon}>
                {library ? libraryfill : library1}

                <h3>
                  Library

                </h3>
              </div>
            </Link>

          </div>

          <hr />

          <div className={styles.bottom_slidebar}>
            <Link href="/upgrade">
              <div className={styles.upgrade} onClick={delete2}>
                <h3>
                  Upgrade
                </h3>
              </div>
            </Link>
            <p>Current pathname: {pathname}</p>
            <Playlist />
            {/* <div className="User-liked">
              <span>Your likes</span>

              <p>{PushPinOutlined}Autoplaylist</p>
            </div> */}
            <div className={styles.create_new}>
              <span>{ }</span>


            </div>
          </div>
        </div>
        }
      </div>
    </main>

  );
}
