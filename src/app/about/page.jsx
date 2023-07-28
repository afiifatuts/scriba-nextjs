import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1448709/pexels-photo-1448709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Menyebarluaskan Inspirasi</h1>
          <h1 className={styles.imgDesc}>
            "Menjelajahi Dunia, Satu Kata pada Saatnya"
          </h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We (Siapa Kami):</h1>
          <p className={styles.desc}>
            Kami adalah para penggiat kreatif yang berbaur menjadi komunitas
            penuh semangat di <span className={styles.underline}>scriba</span>. Dari para penulis berbakat hingga seniman
            yang berjiwa artistik, kami bersatu dalam cinta dan dedikasi
            terhadap dunia kata-kata dan seni tulis. <span className={styles.underline}>scriba</span> adalah hasil
            perjumpaan kami, tempat di mana imajinasi berkembang tanpa batas dan
            kata-kata menjadi pintu gerbang menuju perjalanan mendalam. Setiap
            anggota tim kami memiliki cerita unik dan pengalaman berharga yang
            mereka tuangkan dalam setiap tulisan dan karya seni yang kami
            sajikan.
            <br />
            <br />
             Di dalam <span className={styles.underline}>scriba</span>, keberagaman dihargai dan kreativitas
            diberdayakan. Kami berbagi inspirasi, saling menguatkan, dan tumbuh
            bersama sebagai komunitas yang penuh semangat. Selain dari
            memberikan kesempatan bagi para penulis untuk berbagi karya mereka,
            kami juga mendorong pembaca kami untuk mengembara di dunia kata-kata
            yang kami ciptakan. Dari kisah-kisah menyentuh hingga puisi yang
            menggetarkan, kami berharap dapat mempersembahkan hiburan yang
            menginspirasi dan memotivasi serta menjadi sarana bagi mereka yang
            ingin mengeksplorasi dan menyampaikan cerita mereka kepada dunia.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do (Apa yang Kami Lakukan):</h1>
          <p className={styles.desc}>
            Di <span className={styles.underline}>scriba</span>, kami berusaha untuk menyajikan rangkaian kisah dan karya
            seni yang membuka pintu ke dunia baru. Setiap tulisan dan lukisan
            kami memiliki pesan yang menggetarkan hati, mencerahkan pikiran, dan
            memeluk jiwa pembaca. Kami berbagi pengalaman, pandangan, dan
            pemikiran melalui kata-kata yang indah dan menginspirasi. 
            <br />
            <br /> - Menyajikan kisah-kisah menarik dari berbagai genre. 
            <br /> - Mempublikasikan puisi-puisi
            yang menggugah perasaan dan pikiran. 
            <br /> - Berbagi pandangan, pengetahuan,
            dan inspirasi melalui esai dan artikel bermakna.
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
