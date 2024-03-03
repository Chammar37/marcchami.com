import Head from "next/head";
import Topbar from "./Topbar";
import './globals.css';
import Content from "./Content";

export default function Home() {
  return (
    <div className="main-div">
      
      <Topbar />
      <Content />
    </div>

  );
}
