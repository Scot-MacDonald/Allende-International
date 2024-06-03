import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import EventForm from "../EventForm ";
import Link from "next/link";
import styles from "@/styles/postSingle.module.css";

export default function Event() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/events/${id}`);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/events/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__details}>
          <div className={styles.parent}>
            <div className={styles.child}>
              {/* {data.img && (
                <div className={styles.imgContainer}>
                  <Image src={data.img} alt="" fill className={styles.img} />
                </div>
              )} */}
            </div>
            <div className={styles.child}>
              <h1 className={styles.title}>{data.title}</h1>
              <div className={styles.tost}>
                <div className={styles.subheading}>{data?.desc}</div>
                {data.main && (
                  <div>
                    {data.main.map((item, index) => (
                      <p className={styles.pb} key={index}>
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="flex mt-10  gap-10"> */}
          {/* <div className={styles.textContainer}>
            <h1 className={styles.title}>{data.title}</h1>
            {data.img && (
              <div className={styles.imgContainer}>
                <Image src={data.img} alt="" fill className={styles.img} />
              </div>
            )} */}
          {/* <div className={styles.tost}>
            <div className={styles.subheading}>{data?.desc}</div>
            {data.main && (
              <div>
                {data.main.map((item, index) => (
                  <p className={styles.pb} key={index}>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => {
                setIsEditMode(!isEditMode);
              }}
            >
              <span role="img" aria-label="A pencil">
                ✏️
              </span>
            </button>
            <button onClick={handleDelete} disabled={isEditMode}>
              <span role="img" aria-label="A cross indicating deletion">
                ❌
              </span>
            </button>
          </div>
          {isEditMode && (
            <PostForm
              onSubmit={handleEdit}
              value={data.title}
              isEditMode={true}
            />
          )}
          <Link href="/">Back to all</Link>
        </div> */}
        </div>
      </section>
    </>
  );
}
