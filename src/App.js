import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Acess from "./components/Access/Acess";
import Steps from "./components/Steps/Steps";
import Scroll from "./components/Scrollup/Scroll";
import MeasureRisk from "./components/MeasureRisk/MeasureRisk";
import RiskMang from "./components/RiskMang/RiskMang";
import ManagementTools from "./components/MangementTools/ManagementTools";
import BottomLine from "./components/BottomLine/BottomLine";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import PageScrollProgressBar from "react-page-scroll-progress-bar";
// https://www.bis.org/publ/bppdf/bispap138.pdf
function App() {
  return (
    <>
      <PageScrollProgressBar color="gold" bgColor="transparent" height="6px" style={{zIndex:999999999}}/>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <Acess />
              <MeasureRisk />
              <RiskMang />
              <ManagementTools />
              <BottomLine />
            </>
          }
        />
        <Route
          path="/step"
          element={
            <>
              <Steps />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
