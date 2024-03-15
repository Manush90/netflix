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
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                Recently Added
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#link">
                My List
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search white icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons white"></i>
            <i className="bi bi-person-circle icons white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
