import { Route, Routes } from "react-router";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button class="btn btn-primary">Button</button> */}
    </div>
  );
}

export default App;
