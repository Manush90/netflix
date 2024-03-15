import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
