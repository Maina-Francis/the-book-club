import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Library from "./Components/Library";
import Navbar from "./Components/navbar";
import WishList from "./Components/WishList";
import Footer from "./Components/Footer";

function App() {
  return (
  <>
    <Navbar />
    <Library />
    <WishList/>
    <Footer/>
  </>
  )}

export default App;
