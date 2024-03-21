import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Navbar />
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}
