import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black border-bottom border-top">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
            >
              <Link to={"/"} className="text-light">
                HOME
              </Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              <Link to={"/starships"} className="text-light">
                STARSHIPS
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
