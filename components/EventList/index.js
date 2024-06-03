import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/eventList.module.css";

export default function EventList() {
  const { data, error } = useSWR("/api/events");

  if (error) return <div>Error loading events</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__details}>
          <h2 className={styles.section__title}>Events</h2>
          <p className={styles.section__description}>
            Here you can find the current program. Allendes Internationale also
            takes place offline. Come to our lectures, exhibitions, and
            meetings.
          </p>
        </div>

        <div className="flex justify-center pb-10">
          <table className="table-auto w-full text-left">
            <thead className="thead text-white">
              <tr>
                <th className="">#</th>
                <th>Event</th>
                <th>Country</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {data.map((event) => (
                <tr key={event._id} className={styles.tableRow}>
                  <td>{event.number}</td>
                  <td>
                    <Link href={`/events/${event._id}`}>{event.title}</Link>
                  </td>
                  <td>{event.city}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
