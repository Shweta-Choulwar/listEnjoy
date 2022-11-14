// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Browse from "./Components/Browse";
import Body from "./Components/Body";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element = {<Body/>}/>
          <Route exact path="/Browse" element = {<Browse/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
