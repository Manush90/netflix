import Marvel from "./Marvel";
import HarryPotter from "./HarryPotter";
import Disney from "./Disney";
import { BsFillGrid3X3GapFill, BsGrid } from "react-icons/bs";

const Body = function () {
  return (
    <div className="container-fluid px-4 bg-dark text-white">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">Consigliati per te</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genere
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
          <BsGrid className="icons"></BsGrid>
          <BsFillGrid3X3GapFill className="icons"></BsFillGrid3X3GapFill>
        </div>
      </div>
      <h4>Disney Selection</h4>
      <div className="row mb-4 row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        <div className=" w-100  text-center px-1 ">
          <Disney />
        </div>
      </div>
      <h4>Marvel's Heroes</h4>
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
