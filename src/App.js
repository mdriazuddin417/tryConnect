import "./App.css";
import Home from "../src/Pages/Homepage/Home";
import { Route, Routes } from "react-router-dom";
import SunCrestMedical from "./Pages/sunCrestMedical/SunCrestMedical";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suncrestmedical" element={<SunCrestMedical />}></Route>
      </Routes>
    </div>
  );
}

export default App;
