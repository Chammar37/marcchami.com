import Topbar from "./Topbar";
import './globals.css';
import Content from "./Content";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="main-div">
        <Topbar />
        <Content />
        <Footer />
      </div>
    </>
  );
}
