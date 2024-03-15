import Marvel from "./Marvel";
import HarryPotter from "./HarryPotter";
import Disney from "./Disney";

const Body = function () {
  return (
    <div className="container-fluid px-4 bg-dark text-white">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#link">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#link">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
      <h4>Scorsese's Selection</h4>
      <div className="row mb-4 row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <div className=" w-100  text-center px-1 ">
          <Disney />
        </div>
      </div>
      <h4>Marvel Heroes</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <div className="w-100 col mb-2 text-center px-1">
          <Marvel />
        </div>
      </div>
      <h4>Harry Potter Collection</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 ">
        <div className=" w-100 col mb-2 text-center px-1">
          <HarryPotter />
        </div>
      </div>
    </div>
  );
};

export default Body;
