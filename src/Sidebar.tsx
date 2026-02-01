const Sidebar = () => {
    return (
    <div className="p-2 w-64 text-primary">
        <nav className="p-7 space-y-4">
          <div className="text-gray-500 hover:font-bold">marcchami.com</div>
          <div className="text-xs hover:font-bold"><a href="#projects">Projects </a> </div>
          <div className="text-xs hover:font-bold"><a href="#about">About</a></div>
        </nav>
    </div>
    );
};

export default Sidebar;
