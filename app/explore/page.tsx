import React from 'react'
import styles from '../explore.module.css'

export default function page() {
  return (
    <div className={styles.slidebarforloader}>
      <div className={styles.buttons}>
        <button>New realsee</button>
        <button>Charts</button>
        <button>Moods & genre</button>
        <button>Podcasts</button>

        </div>
    </div>
  )
}
