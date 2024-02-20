"use client";
import React, { useEffect, useState,useRef} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";
import styles from "../home.module.css";
import { data } from "autoprefixer";
import { Result } from "postcss";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import Link from "next/link";


export default function Page() {
  const arrow = <ArrowForwardIosSharpIcon />;
  const ref2 = React.createRef();
  const back = <ArrowBackIosSharpIcon />;
  const [data, setData] = useState(false);
  const [name, setname] = useState();
  const [image, setimage] = useState([]);

  useEffect(() => {
    const k = Math.floor((Math.random() * 100) / 10);
 

    fetch("https://reqres.in/api/users" + k)
      .then((response) => response.json())
      .then((json) => setname(json.data[5].name));

    fetch("https://jsonplaceholder.typicode.com/todos/1" + k)
      .then((response) => response.json())
      .then((json) => setData(json));

    // fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    // .then((response) => response.json())
    // .then((data) => console.log(data[1].url));

    fetch("https://dog.ceo/api/breed/hound/images")
      .then((response) => response.json())
      .then((data) => newks(data.message));

    function newks(data:any) {
      setimage(data);
    }
  }, []);
  
  function nicek() {
    // let a = document.querySelector('.css')
    console.log("nice");
    a.scrollight += 20
  }
  const pathname = usePathname();

  return (
    <main>
      <div className={styles.slidebarforloader_home}>
        <div className={styles.Home}>
          <div className={styles.btn_home}>
            <button>Relax</button>
            <button>Energize</button>
            <button>Podcast</button>
            <button>commute</button>
            <button>Workout</button>
            <button>Focus</button>
          </div>

          <h1>Mixed for u</h1>

          <div className={styles.css}>
            <div className={styles.lol}>
              <ul>
                {image.map(
                  (item: any, index) =>
                    index <= 10 && (
                      <>
                        <span>
                          <Image
                            style={{ borderRadius: 100 }}
                            src={item}
                            alt={"dwadawd"}
                            width="200"
                            height="200"
                            alt={"dwad"}
                          />
                          <h3>{name}</h3>
                          {/* <span>{data.title}</span> */}
                        </span>
                      </>
                    )
                )}
              </ul>
            </div>
          </div>

          <div className={styles.scroll_btn}>
            <button onClick={nicek} >{back}</button>
            <button>{arrow}</button>
          </div>

          <h1>Recommended music videos</h1>

          <div className={styles.Recommendedvideo}>
            <Link
              href={{
                pathname: "/renderplay",
                query: {
                  name: "dwdaw",
                },
              }}
            >
              hello
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
