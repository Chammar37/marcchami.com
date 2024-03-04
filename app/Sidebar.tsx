import Link from 'next/link';
import './globals.css';

const Sidebar = () => {
    return (
    <div className="p-2 w-64 text-primary">
        <nav className="p-7 space-y-4">
          <div className="text-gray-500 hover:font-bold">marcchami.com</div>
          <div className="text-xs hover:font-bold"><Link href="#projects">Projects </Link> </div>
          <div className="text-xs hover:font-bold"><Link href="#about">About</Link></div>
        </nav>
    </div>
    );
};

export default Sidebar;