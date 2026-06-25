import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        🎓 <h2>CampusHub</h2>
      </div>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/students">Students</Link>
        <Link to="/attendance">Attendance</Link>
      </nav>
    </header>
  );
}

export default Navbar;