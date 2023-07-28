import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a galery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/lifestyle" className={styles.item}>
        <span className={styles.title}>Lifestyle</span>
        </Link>
        <Link href="/portfolio/creativity" className={styles.item}>
        <span className={styles.title}>Creativity</span>
        </Link>
        <Link href="/portfolio/personal" className={styles.item}>
        <span className={styles.title}>Personal</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio