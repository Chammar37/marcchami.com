import Image from "next/image";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Header from "./Header";
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
