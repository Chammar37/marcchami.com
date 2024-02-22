import Header from "./Header"
import Sidebar from "./Sidebar"
import Socials from "./Socials"
import './globals.css';

const Topbar = () => {
    return (
        <>
            <div className="grid grid-cols-1 h-52 md:grid-cols-3 min-h-96">
                <div className="hidden md:flex col-span-1">
                    <Sidebar/>
                </div>    
                
                <div className="flex col-span-1 justify-center ">
                    <Header/>
                </div>

                <div className="md:flex md:justify-end md:pr-4">
                    <Socials/>
                </div>
            </div>

            {/* <div className="flex grid-cols-3 justify-center space-x-2 p-4 w-full md:hidden ">
                <Socials/>
            </div> */}
        </>
    );
}

export default Topbar;