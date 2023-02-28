import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          {/* <img src={} alt="avatar" /> */}
          <span>MW portofio</span>
        </li>
        <li>
          <Link to="/" className="btn">
            About me
          </Link>

          <Link to="/projects" className="btn">
            My projects
          </Link>
          <a to="/projects" className="btn">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
