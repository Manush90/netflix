import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marvel from "./components/Marvel.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark ">
        <MyNavBar />
        <Routes>
          <Route path="/src/components/Body.jsx" element={<Body />} />
          <Route
            path="/src/components/Marvel.jsx"
            element={
              <Row className="w-100 ps-3 ">
                <Col>
                  <Marvel />
                </Col>
              </Row>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
