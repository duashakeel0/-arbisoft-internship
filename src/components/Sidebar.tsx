import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">Dashboard</Link>

      <Link to="/students"> Students</Link>

      <Link to="/attendance"> Attendance</Link>
    </aside>
  );
}

export default Sidebar;