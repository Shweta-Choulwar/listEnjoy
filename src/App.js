// import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Body/>
      {/* <form action="../../post" method="post" className="form">
      <button type="submit">Connect</button>
      </form> */}
      <Footer/>

    </div>
  );
}

export default App;
