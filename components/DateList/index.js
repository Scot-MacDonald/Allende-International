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
        <h2 className={styles.section__title}>1000 Days</h2>
        <h2 className={styles.section__description}>
          The timeline traces the development of democratic socialism from 1970
          to 1973, placing important events in Chile in the context of global
          news.
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
          {hoveredDate && <h2 className="text-black">{hoveredDate.title}</h2>}
          {hoveredDate && <p className="text-black">{hoveredDate.desc}</p>}
        </div>
      </div>
    </section>
  );
}
