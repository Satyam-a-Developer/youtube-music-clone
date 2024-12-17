"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";
import styles from "../home.module.css";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import Link from "next/link";

export default function Page() {
  const [name, setName] = useState<string | undefined>("");
  const [imageList, setImageList] = useState<string[]>([]);
  const [todoTitle, setTodoTitle] = useState<string | undefined>("");
  const pathname = usePathname();

  // Fetching Data on Mount
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 10); // Generates 0-9

    // Fetch User Name
    fetch(`https://reqres.in/api/users?page=2`)
      .then((response) => response.json())
      .then((json) => {
        if (json?.data?.length) {
          setName(json.data[randomNumber]?.first_name || "Unknown");
        }
      })
      .catch((err) => console.error("Error fetching user name:", err));

    // Fetch Todo Title
    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber + 1}`)
      .then((response) => response.json())
      .then((json) => setTodoTitle(json.title || "No title"))
      .catch((err) => console.error("Error fetching todo:", err));

    // Fetch Dog Images
    fetch("https://dog.ceo/api/breed/hound/images")
      .then((response) => response.json())
      .then((data) => setImageList(data.message.slice(0, 10))) // Limit to 10 images
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <main>
      <div className={styles.slidebarforloader_home}>
        <div className={styles.Home}>
          {/* Buttons Section */}
          <div className={styles.btn_home}>
            {["Relax", "Energize", "Podcast", "Commute", "Workout", "Focus"].map(
              (label) => (
                <button key={label}>{label}</button>
              )
            )}
          </div>

          <h1>Mixed for You</h1>

          {/* Image List */}
          <div className={styles.css}>
            <div className={styles.lol}>
              <ul>
                {imageList.map((item, index) => (
                  <li key={index} style={{ listStyleType: "none" }}>
                    <span>
                      <Image
                        style={{ borderRadius: "50%" }}
                        src={item}
                        width={200}
                        height={200}
                        alt="Dog Image"
                      />
                      <h3>{name || "Loading..."}</h3>
                      <p>{todoTitle || "Loading..."}</p>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scroll Buttons */}
          <div className={styles.scroll_btn}>
            <button>{<ArrowBackIosSharpIcon />}</button>
            <button>{<ArrowForwardIosSharpIcon />}</button>
          </div>

          <h1>Recommended Music Videos</h1>

          {/* Link Section */}
          <div className={styles.Recommendedvideo}>
            <Link
              href={{
                pathname: "/renderplay",
                query: { name: "play" },
              }}
            >
              <h1>Hello</h1>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
