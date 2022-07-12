import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => (
    <header className="navbar">
        <Link to="/">
            <h2>COMIC BOOKS</h2>
        </Link>

        <nav className="links">
            <ul>
                <Link to="/">Home</Link>
                <Link to="comics">Comics</Link>
            </ul>
        </nav>
    </header>
);
export default Navbar;
