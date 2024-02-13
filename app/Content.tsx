import './globals.css';
import About from './About';
import Projects  from './Projects';

const Content = () => {
    return (
        <div className="grid grid-cols-1 space-y-2">
            <About />

            <Projects />
        </div>
    );
}

export default Content;