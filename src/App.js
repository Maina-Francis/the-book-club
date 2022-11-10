import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Library from "./Components/Library";
import Navbar from "./Components/navbar";
import WishList from "./Components/WishList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Library />}></Route>
        <Route path="/library" element={<Library />}></Route>
        <Route path="/reading" element={<Library />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Routes>
    </>
  );
}

export default App;
