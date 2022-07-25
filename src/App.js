import "./App.css";
import Home from "../src/Pages/Homepage/Home";
import { Route, Routes } from "react-router-dom";
import SunCrestMedical from "./Pages/sunCrestMedical/SunCrestMedical";
import PassPortOffice from "./Pages/passportOffice/PassPortOffice";
import HappyMembersCreditUnion from "./Pages/HappyMembersCreditUnion/HappyMembersCreditUnion";
import LoftyLabs from "./Pages/LoftyLabs/LoftyLabs";
import HealingHealth from "./Pages/HealingHealth/HealingHealth";
import LargeLoans from "./Pages/LargeLoansPage/LargeLoans";
import HarmonyHomes from "./Pages/HarmonyHomes/HarmonyHomes";
import AffordableAirlines from "./Pages/AffordableAirlines/AffordableAirlines";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suncrestmedical" element={<SunCrestMedical />} />
        <Route path="/passportoffice" element={<PassPortOffice />} />
        <Route
          path="/HappyMembersCreditUnion"
          element={<HappyMembersCreditUnion />}
        />
        <Route path="/LoftyLabs" element={<LoftyLabs />} />
        <Route path="/HealingHealth" element={<HealingHealth />} />
        <Route path="/LargeLoans" element={<LargeLoans />} />
        <Route path="/HarmonyHomes" element={<HarmonyHomes />} />
        <Route path="/AffordableAirlines" element={<AffordableAirlines />} />
      </Routes>
    </div>
  );
}

export default App;
