import "./App.css";
import CardCont from "./components/CardContainer/CardCont";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home></Home>
        <Routes>
           <Route path="/" element={<CardCont/>}></Route>
           <Route path="/detail/:id" element={<Detail/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
