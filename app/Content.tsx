import './globals.css';
import About from './About';
import Projects  from './Projects';

const Content = () => {
    return (
        <div className="grid grid-cols-1 space-y-2 md:ml-9 ml-2">
            <Projects />

            <About />

        </div>
    );
}

export default Content;