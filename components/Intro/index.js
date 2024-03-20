import styles from "@/styles/intro.module.css";
import Image from "next/image";

export default function Intro() {
  return (
    <section className={styles.textContainer}>
      <div className={styles.backgroundImage}>
        <Image
          src="/hero.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.overlay}></div>
      </div>

      <h2 className={styles.desc}>
        In the early 1970s, the left-wing alliance Unidad Popular ruled Chile
        for 1000 days. Together with the population, it worked on its very own
        democratic socialism. Supporters from all over the world were also
        involved. This website is dedicated to them.
      </h2>
    </section>
  );
}
