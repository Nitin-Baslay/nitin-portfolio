import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Master from "./components/Master";
import Projects from "./components/Projects";
import Qualification from "./components/Qualification";

function App() {
  return (
    <div className="App">
      <Master />;
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/qualification" element={<Qualification />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
