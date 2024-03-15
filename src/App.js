import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
