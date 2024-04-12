import React from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/postList.module.css";

function getRandomPosts(posts, numPosts) {
  const shuffled = posts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numPosts);
}

export default function FeaturedPostList() {
  const { data, isLoading } = useSWR("/api/posts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null;
  }

  const featuredPosts = getRandomPosts(data, 4);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__top}></div>
        <div className={styles.section__details}>
          <h2 className={styles.section__title}>Featured Life Journeys</h2>
          <h2 className={styles.section__description}>
            Here we tell the stories of people from all over the world who lived
            in Chile during Salvador Allende's reign. Discover well-known and
            never-before-heard stories.
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {featuredPosts.map((post) => (
            <Link key={post._id} href={`/posts/${post._id}`}>
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
                  <h1 className={styles.title}>{post.title}</h1>
                </div>
                <div className={styles.top}>
                  <div className={styles.imgContainer}>
                    {post.img && (
                      <div className={styles.imgWrapper}>
                        <div className={styles.imgContainer}>
                          <Image
                            src={post.img}
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
                  <p className={styles.description}>{post.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
