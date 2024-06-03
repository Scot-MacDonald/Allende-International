// components/ScrollImageLayout.js

import { useEffect, useState, useRef } from "react";
import styles from "@/styles/ScrollImageLayout.module.css";

const images = [
  "/Foto_1_heroes_en_las_paredes-1-fotor-2024053110534.png",
  "/hero.jpg",
  "/Foto_1_heroes_en_las_paredes-1-fotor-2024053110534.png",
];
const ScrollImageLayout = () => {
  const textRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = textRef.current.querySelectorAll("[data-section]");
      let selectedIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const containerRect = textRef.current.getBoundingClientRect();

        if (rect.top <= containerRect.top + 20) {
          selectedIndex = index;
        }
      });

      setCurrentImage(images[selectedIndex]);
    };

    const textElement = textRef.current;
    textElement.addEventListener("scroll", handleScroll);

    return () => textElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img
          src={currentImage}
          className={styles.stickyImage}
          alt="Scroll Image"
        />
      </div>
      <div className={styles.rightColumn} ref={textRef}>
        <p data-section="0">This is the first section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        {/* Insert long text or multiple paragraphs here */}
        <p data-section="1">This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        {/* Insert more text or multiple paragraphs here */}
        <p data-section="2">This is the third section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
        <p>This is the second section of the text...</p>
      </div>
    </div>
  );
};

export default ScrollImageLayout;
