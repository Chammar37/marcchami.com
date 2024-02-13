import './globals.css';

const Sidebar = () => {
    return (
    <div className="p-2 w-64">
        <nav className="absolute p-7 space-y-4 sm:center" >
          <div className="text-gray-500">marcchami.com</div>
          <div className="text-xs">Projects</div>
          <div className="text-xs">About</div>
        </nav>
    </div>
    );
};

export default Sidebar;