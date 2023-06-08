import Head from "next/head";
import "../styles/Home.module.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="blue"
        style={{
          backgroundColor: "#33475b",
          height: "100vh",
          background: "linear-gradient(#58419e, #18074a)",
        }}
      >
        <Navbar />
        <About />
      </div>
    </div>
  );
}
