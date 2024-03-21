import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/arbeitList.module.css";

export default function DateList() {
  const { data, isLoading } = useSWR("/api/dates");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
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
      <ul className="flex">
        {data.map((date) => (
          <li key={date._id}>
            <Link href={`/${date._id}`}>{date.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
