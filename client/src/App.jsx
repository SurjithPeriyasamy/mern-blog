import "./index.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="pt-14">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
