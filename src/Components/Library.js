import React, { useState, useEffect } from 'react'
import Card from './Card';

const Library = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/books`)
        .then((res) => res.json())
        .then((aniInfo) => {
          setCards(aniInfo);
        });
      }, []);

    const displayCards = cards.map((book) => (
        <Card
          key={book.id}
          book={book}
        />
      ));
  return (
    <>
      <div className="container">
      <h1>Library</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {displayCards}
        </div>
    </div>
    </>
  )
}

export default Library