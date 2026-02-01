import Header from "./Header"
import Sidebar from "./Sidebar"
import Socials from "./Socials"

const Topbar = () => {
    return (
        <>
            <div className="grid grid-cols-1 h-52 md:grid-cols-3 md:min-h-56 ">
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
        </>
    );
}

export default Topbar;
