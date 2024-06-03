// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="px-10 py-2">
//       <nav className="flex justify-between items-center">
//         <div className="">
//           <Link href="/">
//             <h1 className={styles.title}>International Allende</h1>
//           </Link>
//         </div>

//         {/* Navigation */}
//         <div className="hidden md:block">
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/posts">Life journeys</Link>
//             </li>

//             <li>
//               <Link href="/arbeits">How we worked</Link>
//             </li>
//             <li>
//               <Link href="/arbeits">1000 Days</Link>
//             </li>
//             <li>
//               <Link href="/events">Events</Link>
//             </li>
//             <li>
//               <Link href="/arbeits">Soundtrack of the up</Link>
//             </li>
//             {/* Add more navigation links as needed */}
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto px-10 py-2 flex justify-between items-center">
        <div className="">
          <Link href="/">
            <h1 className={styles.title}>International Allende</h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/posts" className="hover:text-gray-400">
            Life journeys
          </Link>
          <Link href="/arbeits" className="hover:text-gray-400">
            How we worked
          </Link>
          <Link href="/dates" className="hover:text-gray-400">
            1000 Days
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`${styles.fullScreenMenu} fixed inset-0 z-50 bg-black text-white md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-gray-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
