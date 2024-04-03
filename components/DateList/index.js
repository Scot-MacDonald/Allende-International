import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dateList.module.css";
import { useState } from "react";

export default function DateList() {
  const { data, isLoading } = useSWR("/api/dates");
  const [hoveredDate, setHoveredDate] = useState(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null; // Return null or any other placeholder when data is not available
  }

  return (
    <section className={styles.section}>
      <div className={styles.section__details}>
        <h2 className={styles.section__title}>Life journeys</h2>
        <h2 className={styles.section__description}>
          Here we tell the stories of people from all over the world who lived
          in Chile during Salvador Allende's reign. Discover well-known and
          never-before-heard stories.
        </h2>
      </div>
      <ul className={styles.filters}>
        <li className={styles.filter}>all</li>
        <li className={styles.filter}>Years</li>
        <li className={styles.filter}>1970</li>
        <li className={styles.filter}>1971</li>
        <li className={styles.filter}>1972</li>
        <li className={styles.filter}>1973</li>
      </ul>
      <div className={styles.calendar}>
        <div className={styles.dateBox}>
          {data.map((date) => (
            <div
              key={date._id}
              className={styles.dateItem}
              onMouseEnter={() => setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
            >
              <Link className={styles.bt} href={`/${date._id}`}>
                <p className={styles.week}>{date.year}</p>
                <h2 className={styles.dateList}>{date.title}</h2>
                <p className={styles.week}>Week {date.week}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.contentBox}>
          {hoveredDate && <p className="text-black">{hoveredDate.desc}</p>}
          {hoveredDate && <p className="text-black">{hoveredDate.title}</p>}
        </div>
      </div>
    </section>
  );
}
