import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to My Projects</h1>
      </div>
      <nav>
        <Link to="profile">
          <h2>Profile</h2>
        </Link>
        <br />
        <Link to="events">
          <h2>CalendarEvents</h2>
        </Link>
      </nav>
    </div>
  );
};
