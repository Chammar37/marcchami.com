import Header from "./Header"
import Sidebar from "./Sidebar"
import Socials from "./Socials"
import './globals.css';

const Topbar = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 h-64">
            <Sidebar/>
            <Header/>
            <Socials/>
        </div>
    );
}

export default Topbar;