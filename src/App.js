import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/antwerp-pizza/" exact element={<Home/>} />
          <Route path="/antwerp-pizza/menu" exact element={<Menu/>} />
          <Route path="/antwerp-pizza/about" exact element={<About/>} />
          <Route path="/antwerp-pizza/contact" exact element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
