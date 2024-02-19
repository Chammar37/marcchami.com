import './globals.css';

const Sidebar = () => {
    return (
    <div className="p-2 w-64 text-primary">
        <nav className=" p-7 space-y-4">
          <div className="text-gray-500 hover:rounded-md">marcchami.com</div>
          <div className="text-xs hover:font-bold">Projects</div>
          <div className="text-xs hover:font-bold">About</div>
        </nav>
    </div>
    );
};

export default Sidebar;