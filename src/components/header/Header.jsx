import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";
import { auth } from "../../../config/firebase";

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };
  return (
    <>
      <nav className="navbar navbar-black bg-black">
        <div className="container-fluid d-flex justify-content-between ">
          <div style={{ flex: 1 }}></div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ width: "200px", height: "200px" }}>
              <img
                src="/star-wars-2.svg"
                alt="Logo"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {user ? (
              <>
                <span className="text-white me-3">Welcome, {user.email}</span>
                <button className="btn text-light" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn text-light">
                  <Link to="/login">Log in</Link>
                </button>
                <button className="btn text-light">
                  <Link to="/signup">Sign up</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <Navbar />
    </>
  );
}

export default Header;
