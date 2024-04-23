import "./index.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="mt-16">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
