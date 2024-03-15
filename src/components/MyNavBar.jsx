import { BsBell, BsPerson, BsSearch } from "react-icons/bs";

const NavBar = function () {
  return (
    <nav className="navbar navbar-expand-lg p-0 bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#link">
          <img
            src="/assets/logo.png"
            alt="logoNetflix"
            style={{ width: "100px", height: "55px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="# link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                Film
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                Aggiunti di recente
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                Preferiti
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <BsSearch className="icons"></BsSearch>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <BsBell className="icons"></BsBell>
            <BsPerson className="icons"></BsPerson>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
