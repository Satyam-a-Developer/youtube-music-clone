import "./globals.css";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import NextTopLoader from 'nextjs-toploader';
import First from "./staticfil/page"
import LibraryMusicIconfill from '@mui/icons-material/LibraryMusic';
import ExploreIconfill from '@mui/icons-material/Explore';
import ShuffleIcon from '@mui/icons-material/Shuffle';
// import styles from "."
import LoopIcon from '@mui/icons-material/Loop';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import line from "../public/3line.png";
import HomeIconfill from '@mui/icons-material/Home';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Page from "./renderplay/page";
import PauseIcon from '@mui/icons-material/Pause';
import Link from "next/link";
import logo from "../public/unnamed.png";
import user from "../public/user.jpg";

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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  // const pause = <Pause/>;
  // const Shuffle = <ShuffleIcon/>
  // const Mloop = <Loop/>
  // const volume = <VolumeUpIcon/>
  // const skip = <SkipNextIcon/>
  // const Skipicon = <SkipPreviousIcon/>
  const fillhome = <HomeIconfill/>
  const explorefill = <ExploreIconfill/>
const libraryfill = <LibraryMusicIconfill/>
  const statusImage = <HomeIcon sx={{ fontSize: 30 }}/>;
  const plus = <AddIcon  sx={{ fontSize: 30 }}/>;
  const PushPinOutlined = <PushPinOutlinedIcon  sx={{ fontSize: 10 }}/>;
  const search = <SearchIcon sx={{ fontSize: 30 }} />;
  const library = <LibraryMusicIcon sx={{ fontSize: 30 }}/>;
  const explore = <ExploreIcon sx={{ fontSize: 30 }}/>;

 
  return (
    <html lang="en">
      <body>
  <NextTopLoader color="#f70202"  height={7}  showSpinner={false}  zIndex={1600} />
  <First/>

       
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
