import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boxes from "./components/Boxes";
import Question from "./components/Question";
import Celebration from "./components/Celebration";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Boxes />} />
        <Route path="/question" element={<Question />} />
        <Route path="/Celebration" element={<Celebration/>}/>
      </Routes>
    </BrowserRouter>
  );
}
