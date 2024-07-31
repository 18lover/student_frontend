import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index"
import Home from "./component/Home";
import AddStudent from "./component/AddStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/student" element={<AddStudent/>}></Route>
          <Route path="/student/:id" element={<AddStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
