import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="sticky top-0 bg-black p-4 px-8 z-50 shadow-md flex justify-between items-center transition-all duration-300">
            <div className="flex w-full justify-end gap-8">
                <Link to="/" className="text-white font-bold text-lg no-underline hover:underline hover:text-gray-100 transition-colors">Home</Link>
                <Link to="/about" className="text-white font-bold text-lg no-underline hover:underline hover:text-gray-100 transition-colors">About</Link>
                <Link to="/projects" className="text-white font-bold text-lg no-underline hover:underline hover:text-gray-100 transition-colors">Projects</Link>
            </div>
        </nav>
    );
};

export default Navbar;
