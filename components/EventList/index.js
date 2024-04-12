import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/eventList.module.css";

export default function EventList() {
  return (
    <section className={styles.section}>
      <div className={styles.section__details}>
        <h2 className={styles.section__title}>Events</h2>
        <h2 className={styles.section__description}>
          Here you can find the current program. Allendes Internationale also
          takes place offline. Come to our lectures, exhibitions and meetings.
        </h2>
      </div>
      <div className="flex justify-center">
        <table class="table-auto w-full text-left ">
          <thead className="thead text-white">
            <tr>
              <th className="">#</th>
              <th>Event</th>
              <th>Country</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td>1</td>
              <td>
                Together for a new Chile." Launch event of Allendes
                Internationale
              </td>
              <td>Berlin</td>
              <td>06.09.2018</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>2</td>
              <td>Santiago 1970-2030. interventions from the future. </td>
              <td>Santiago</td>
              <td>26.04.2019</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>3</td>
              <td>
                Let's make history! A debate on the internationalism of the
                Unidad Popular
              </td>
              <td>Santiago</td>
              <td>27.04.2019</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>4</td>
              <td>
                Memories of resistance. Resistances of memory (in cooperation
                with the Ibero-American Institute)
              </td>
              <td>Berlin</td>
              <td>17.06.2019</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>5</td>
              <td>
                1000 days | 6 views. Photographs from the Chile of the Unidad
                Popular.
              </td>
              <td>Berlin</td>
              <td>05.09.2019</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>6</td>
              <td>
                "Every life is a world" A cinematic biography by Víctor Pey.
              </td>
              <td>Santiago</td>
              <td>07.09.2019</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>7</td>
              <td>
                Politics in construction The eventful history of the Gabriela
                Mistral Cultural Center
              </td>
              <td> Berlin</td>
              <td>12.09.2019</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
