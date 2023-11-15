import "./App.css";
import Navbar from "./components/reusable/Navbar";
import { Footer } from "./components/reusable/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
