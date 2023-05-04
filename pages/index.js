import Head from "next/head";
import "../styles/Home.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-slate-500">
        <Navbar />
      </div>
    </div>
  );
}
