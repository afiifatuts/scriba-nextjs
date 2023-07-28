import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Exploring Nature's Wonders</h1>
          <p className={styles.desc}>
            Selamat datang di blog kami yang mempesona, di mana kami mengajak
            Anda untuk menjelajahi keajaiban alam. Di sini, Anda akan dipandu
            dalam petualangan menakjubkan yang mengungkap pesona alam dalam
            segala keindahannya. Dari gunung yang menjulang hingga hutan yang
            misterius, kami mengeksplorasi lanskap yang menakjubkan dan
            menyaksikan kehidupan yang mempesona. Bersiaplah untuk merenungkan
            kebesaran alam dan terinspirasi oleh keindahan alamiah yang tak
            tergambarkan.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}> NatureLover</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            width={500}
              height={500}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          1. Melangkah Menuju Ketinggian - Eksplorasi Gunung: Dalam bab ini,
          kami memulai perjalanan kami menuju puncak gunung yang menakjubkan.
          Meniti jalur berliku dan menyaksikan pemandangan yang menakjubkan dari
          ketinggian, kami berbagi pengalaman mendaki yang mengasyikkan.
          Saksikan keindahan alam dari ketinggian yang luar biasa dan rasakan
          semangat petualangan yang menggelora. 
          <br />
          2. Hutan Ajaib: Menyusuri Hutan
          yang Megah: Dalam bab ini, kami memasuki hutan yang penuh misteri dan
          pesona. Mengarungi jalur beralur dedaunan dan merasakan keharuman
          tanah hutan, kami menemukan keajaiban flora dan fauna yang hidup dalam
          harmoni. Dari burung berkicau hingga suara gemuruh sungai, hutan
          mempersembahkan keindahan dan ketenangan yang tiada tara. 
          <br />
          3. Pantai
          Impian - Pesona Lautan Biru: Di segmen ini, kami berjalan menyusuri
          garis pantai yang menggoda, di mana samudra biru yang luas bertemu
          dengan pasir putih yang lembut. Menyaksikan ombak yang memukau dan
          menyelami kehidupan bawah laut yang berwarna-warni, kami membiarkan
          diri kami terpesona oleh kekuatan alam yang maha dahsyat. 
          <br />
          4. Taman dan
          Kebun Indah: Keindahan Tumbuhan dan Bunga: Dalam bab ini, kami
          berjalan melalui taman-taman yang indah dan kebun bunga yang
          berwarna-warni. Mengenali flora yang beraneka ragam dan meresapi
          keindahan tumbuhan yang menakjubkan, kami menemukan kedamaian di
          antara kebun-kebun yang dipenuhi warna dan aroma menawan. 
          <br />
          5. Cahaya
          Malam: Pesona Langit Bintang dan Aurora: Di segmen terakhir ini, kami
          menatap langit malam yang penuh cahaya. Mengamati keindahan gemerlap
          bintang dan tarian aurora yang menawan, kami terpesona oleh pesona
          langit malam yang memancarkan misteri dan keajaiban semesta.
          Bergabunglah dengan kami dalam petualangan tak terlupakan ini,
          menyelami keajaiban alam dan menemukan keindahan alam yang tak
          tergambarkan. Selamat datang di "Exploring Nature's Wonders," di mana
          rasa kagum dan keberagaman alam menyapa di setiap perjalanan kami.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
