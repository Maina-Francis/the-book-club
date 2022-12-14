import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Library from "./Components/Library";
import Navbar from "./Components/navbar";
import WishList from "./Components/WishList";
import Reading from "./Components/Reading";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cards, setCards] = useState([]);
  const [reading, setReading] = useState([]);

  useEffect(() => {
    fetch(`https://phase-3-backend-project-production.up.railway.app/books`)
    .then((res) => res.json())
    .then((bookInfo) => {
      setCards(bookInfo);
    });
  }, []);

  const handleAddBooks = (book) =>{
    const BookExist = reading.find((item) => item.id === book.id);
    if (!BookExist){
      setReading([...reading, book])
    }
  }

  return (
  <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Library  
          cards={cards}
          setCards={setCards}
          handleAddBooks={handleAddBooks} />}></Route>
        <Route path="/library" element={<Library
          cards={cards}
          setCards={setCards}
          handleAddBooks={handleAddBooks} />}></Route>
        <Route path="/reading" element={<Reading 
          reading={reading}
          setReading={setReading}/>}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
