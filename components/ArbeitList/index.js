import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/arbeitList.module.css";

function getRandomArbeits(arbeits, numArbeits) {
  const shuffled = arbeits.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numArbeits);
}

export default function ArbeitList() {
  const { data, isLoading } = useSWR("/api/arbeits");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  const featuredArbiets = getRandomArbeits(data, 2);

  return (
    <section className={styles.section}>
      <div className={styles.section__details}>
        <h2 className={styles.section__title}>This is how they worked</h2>
        <svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="50,5 90,35 75,85 25,85 10,35"
            fill="#64b95e"
            stroke="#64b95e"
            stroke-width="2"
          />
        </svg>
        <h2 className={styles.section__description}>
          What can we learn from socialism hecho en Chile?
          <br /> Our series of articles explores the Chilean path to socialism
          at 10 important "construction sites" of the Unidad Popular and shows
          how internationalists took part.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {featuredArbiets.map((arbeit) => (
          <Link key={arbeit._id} href={`/arbeits/${arbeit._id}`}>
            <div className={styles.container}>
              <div className={styles.titleContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className={styles.hexagon}
                >
                  <polygon
                    points="50 1.95 97.5 25 97.5 75 50 98.05 2.5 75 2.5 25 50 1.95"
                    fill="white"
                    stroke="white"
                  />
                </svg>
                <h1 className={styles.title}>{arbeit.title}</h1>
              </div>
              <div className={styles.top}>
                <div className={styles.imgContainer}>
                  {arbeit.img && (
                    <div className={styles.imgWrapper}>
                      <div className={styles.imgContainer}>
                        <Image
                          src={arbeit.img}
                          alt=""
                          fill
                          className={styles.img}
                        />
                      </div>
                      <div className={styles.overlay}></div>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.bottom}>
                <p className={styles.description}>Read More</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
