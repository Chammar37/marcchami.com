import Header from "./Header"
import Sidebar from "./Sidebar"
import './globals.css';

const Topbar = () => {
    return (
        <div className=" h-56">
            <Sidebar/>
            <Header/>
        </div>
    );
}

export default Topbar;