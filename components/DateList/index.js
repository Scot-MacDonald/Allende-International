import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/dateList.module.css";
import { useState } from "react";

export default function DateList() {
  const { data, isLoading } = useSWR("/api/dates");
  const [hoveredDate, setHoveredDate] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null; // Return null or any other placeholder when data is not available
  }

  const filteredData = selectedYear
    ? data.filter((date) => date.year === String(selectedYear))
    : data;
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
        <li
          className={selectedYear === null ? styles.active : styles.filter}
          onClick={() => setSelectedYear(null)}
        >
          all
        </li>
        <li
          className={selectedYear === null ? styles.filter : styles.filter}
          onClick={() => setSelectedYear(null)}
        >
          Years
        </li>
        {[1970, 1971, 1972, 1973].map((year) => (
          <li
            key={year}
            className={selectedYear === year ? styles.active : styles.filter}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </li>
        ))}
      </ul>
      <div className={styles.calendar}>
        <div className={styles.dateBox}>
          {filteredData.map((date) => (
            <div
              key={date._id}
              className={styles.dateItem}
              onMouseEnter={() => setHoveredDate(date)}
              onMouseLeave={() => setHoveredDate(null)}
            >
              <Link className={styles.bt} href={`/dates/${date._id}`}>
                <p className={styles.week}>{date.year}</p>
                <h2 className={styles.dateList}>{date.title}</h2>
                <p className={styles.week}>Week {date.week}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.contentBox}>
          {hoveredDate && <h2 className={styles.title}>{hoveredDate.title}</h2>}
          {/* {hoveredDate && <p className={styles.white}>{hoveredDate.desc}</p>} */}
          {hoveredDate && hoveredDate.main && (
            <div>
              {hoveredDate.main.map((item, index) => (
                <p className={styles.white} key={index}>
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
