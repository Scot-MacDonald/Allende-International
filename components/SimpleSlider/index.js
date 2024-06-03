import useSWR from "swr";
import Image from "next/image";
import styles from "@/styles/slider.module.css";
import { useRef, useState, useEffect } from "react";

export default function ArbeitList() {
  const { data, isLoading } = useSWR("/api/arbeits");
  const scrollingRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollDiv = scrollingRef.current;

    if (!scrollDiv) return;

    const mouseDownHandler = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollDiv.offsetLeft);
      setScrollLeft(scrollDiv.scrollLeft);
    };

    const mouseMoveHandler = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollDiv.offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      scrollDiv.scrollLeft = scrollLeft - walk;
    };

    const mouseUpHandler = () => {
      setIsDragging(false);
    };

    scrollDiv.addEventListener("mousedown", mouseDownHandler);
    scrollDiv.addEventListener("mousemove", mouseMoveHandler);
    scrollDiv.addEventListener("mouseup", mouseUpHandler);
    scrollDiv.addEventListener("mouseleave", mouseUpHandler);

    return () => {
      scrollDiv.removeEventListener("mousedown", mouseDownHandler);
      scrollDiv.removeEventListener("mousemove", mouseMoveHandler);
      scrollDiv.removeEventListener("mouseup", mouseUpHandler);
      scrollDiv.removeEventListener("mouseleave", mouseUpHandler);
    };
  }, [isDragging, startX, scrollLeft]); // Only run on mount/unmount

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return null; // Prevent rendering if no data
  }

  return (
    <>
      <div className={styles.section__details}>
        <h2 className={styles.section__title}>This is how they worked</h2>
        <h2 className={styles.section__description}>
          What can we learn from socialism hecho en Chile?
          <br /> Our series of articles explores the Chilean path to socialism
          at 10 important "construction sites" of the Unidad Popular and shows
          how internationalists took part.
        </h2>
      </div>

      <div className={styles.scrolling} ref={scrollingRef}>
        {data.map((arbeit) => (
          <div
            key={arbeit._id}
            className={styles.card}
            href={`/arbeits/${arbeit._id}`}
          >
            <div className={styles.container}>
              <div className={styles.inside}>
                <div className={styles.left}>
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
                </div>
                <div className={styles.right}>
                  <div className={styles.titleContainer}>
                    <h1 className={styles.title}>{arbeit.title}</h1>
                  </div>
                  {arbeit.main && (
                    <div>
                      {arbeit.main.map((item, index) => (
                        <p className={styles.pb} key={index}>
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
