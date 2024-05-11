import SideNav from "./components/SideNav";
import "./App.css";
import ManageProduct from "./pages/ManageProduct";
import { Route, Routes } from "react-router-dom";
import Insights from "./components/Insights";
import Basic from "./components/Basic";
import Layouts from "./components/Layouts";
import Title from "./components/Title";
import Pricing from "./components/Pricing";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="flex overflow-hidden">
      <SideNav />

      <Routes>
        <Route path="/" element={<ManageProduct />}>
          <Route path="/" element={<Cards/>} />
          <Route path="/insights" element={<Insights/>} />
          <Route path="/basic" element={<Basic/>} />
          <Route path="/layouts" element={<Layouts/>} />
          <Route path="/titles" element={<Title/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
