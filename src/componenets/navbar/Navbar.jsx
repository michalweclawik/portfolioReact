import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          {/* <img src={} alt="avatar" /> */}
          <span>MW portfolio</span>
        </li>
        <li>
          <Link to="/portfolioReact " className="btn">
            About me
          </Link>

          <Link to="/portfolioReact/projects" className="btn">
            My projects
          </Link>
          <a to="portfolioReact/projects" className="btn">
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
}
