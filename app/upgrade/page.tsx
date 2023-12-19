import React from 'react'
import styles from "../upgrade.module.css"
import logo from "../../public/upgradelogo.png"
import Image  from 'next/image'
import indiangirl from "../../public/indiangirlheadphone.jpeg"
import girlheadphone from "../../public/girlheadphone.jpeg"
import back from "../../public/backgroundimgyt.jpeg"
import downloadlogo from "../../public/downloadpremiuminfo.png"
import playlogo from "../../public/playpremiuminfo.png"
import headphonelogo from "../../public/headphonepremiuminfo.png"
export default function page() {
  return (
    

    <div className={styles.slidebarforloader}>
       <div className={styles.youtube_premium_page_header}>
        <div className={styles.headerlogo_image}>
          <Image src={logo} alt={"dwada"} />
          <h2>Get Music Premium to listen to music <br/>
          ad-free, offline & with your screen off</h2>
          <div className={styles.btn}>

          <button>Get Music Premiun</button>
          </div>


          <h3>
          Prepaid and subscription plans available. Prices start at
          <br/>
           ₹99.00/month. Free trials available with subscription plans only.
          </h3>
          <h4>
          Or save money with an annual, family or student plan
          </h4>

        </div>



{/* <h3>dwdaw</h3> */}
      </div> 
    <div className={styles.premiuminfo}>

       <div className={styles.logo33}>
       <Image src={headphonelogo} alt={"dwad"} />
        <h2>Listen in the background</h2>
        <span>Don’t worry about your music stopping when you lock your screen or use other apps.</span>

       </div>

       <div className={styles.play}>

       <Image src={playlogo} alt={"dwad"} />
        <h2>Ad-free music</h2>
        <span>Listen to the world of music without ads.</span>
       </div>


<div className={styles.download}>
<Image src={downloadlogo} alt={"dwad"} />
        <h2>Download and go
</h2>
<span>Listen to your favorite music on the go.</span>
</div>
      

      </div> 
      <div className={styles.img}>
      <h1>Background play</h1>
      <span>Turn off the screen, use other apps, all while your music keeps playing.</span>
      <Image src={back} alt="dwadaw" height={800} width={1400}/>

      </div>
      <br/>
      <div className={styles.girlimg}>
      <Image src={girlheadphone} alt="dwadaw" height={800} width={1400}/>
<h1>No ads or interruptions on music</h1>
<span>Easily explore the world of music without any interruptions.</span>
      </div>
      <br/>
      <div className={styles.indiangirl}>
      <Image src={indiangirl} alt="dwadaw" height={800} width={1400}/>
        <h1>Download your favorite tracks</h1>
        <span>No connection? No problem. Take your songs, albums and playlists offline.</span>
      </div>

      Have other questions? Visit the YouTube Help Center
</div>
  )
}