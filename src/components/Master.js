import { Link, NavLink } from "react-router-dom";
import "./Master.css";
const Master = () => {
  return (
    <div>
      <header>
        <div className="head">
          <h2 className="header">PORTFOLIO OF NITIN KUMAR</h2>
          <NavLink to={"/"} activeClassName="active">
            <button>Home</button>
          </NavLink>
          <NavLink to={"/projects"} activeClassName="active">
            <button>Projects</button>
          </NavLink>
          <NavLink to={"/qualification"} activeClassName="active">
            <button>Qualifications</button>
          </NavLink>
          <NavLink to={"/contact"} activeClassName="active">
            <button>Contact</button>
          </NavLink>
        </div>
      </header>
    </div>
  );
};
export default Master;
