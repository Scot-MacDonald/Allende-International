import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Navbar />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
