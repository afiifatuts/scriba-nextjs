import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
<div className={styles.container}>
  <div className={styles.item}>
    <h1 className={styles.title}>Kreativitas Tanpa Batas</h1>
    <p className={styles.desc}>Di sini, kreativitas bersatu dan mimpi-mimpi mendarat. 
      Bergabunglah dalam perjalanan kami yang penuh warna, 
      di mana setiap kata memiliki keajaiban dan setiap tulisan memiliki cerita.</p>
      <Button url="/portfolio" text="Explore Now"></Button>
  </div>
  <div className={styles.item}>
  <Image src={Hero} alt='Hero' className={styles.img}/>
  </div>
</div>
  )
}
