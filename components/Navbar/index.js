import styles from "@/styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="px-5">
      <nav className="flex justify-between items-center">
        <div className="">
          <Link href="/">
            <h1 className={styles.title}>International Allende</h1>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
