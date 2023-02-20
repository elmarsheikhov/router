import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Users from "./components/Users";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/users" element={<Users />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
