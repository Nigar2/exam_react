import "./App.css";
import React from "react";
import Exam from "./components/Exam/exam";
import Career from "./components/Career/career";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index path="/exam" element={<Exam/>}></Route>
            <Route path="/career" element={<Career/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
 export default App;
