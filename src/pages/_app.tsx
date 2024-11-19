import "@/styles/globals.css";
import "@/styles/cadProd/cadProd.css";
import "@/styles/cadProd/modal.css"
import "@/styles/Sidebar.module.css"


import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
