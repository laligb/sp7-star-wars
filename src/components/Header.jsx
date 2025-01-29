import Navbar from "./Navbar";

function Header() {
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
            <form className="d-flex">
              <button className="btn text-light" type="submit">
                Log in
              </button>
            </form>
            <form className="d-flex">
              <button className="btn text-light" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Navbar />
    </>
  );
}

export default Header;
