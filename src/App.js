import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Library from "./Components/Library";
import Navbar from "./Components/navbar";
import WishList from "./Components/WishList";
import Reading from "./Components/Reading";

function App() {
  const [cards, setCards] = useState([]);
  const [reading, setReading] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/books`)
    .then((res) => res.json())
    .then((bookInfo) => {
      setCards(bookInfo);
    });
  }, []);

  const handleAddBooks = (book) =>{
    const BookExist = reading.find((item) => item.id === book.id);
    if (!BookExist){
      setReading([...reading, {...book, quantity: 1}])
    }
  }

  return (
  <>
    <Navbar />
    <Library 
      cards={cards}
      setCards={setCards}
      handleAddBooks={handleAddBooks}
    />
    <WishList/>
    {/* <Reading 
        reading={reading}
        setReading={setReading}
    /> */}
  </>
  )}

export default App;
