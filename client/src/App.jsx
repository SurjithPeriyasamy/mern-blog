import "./index.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-16 mb-52">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
