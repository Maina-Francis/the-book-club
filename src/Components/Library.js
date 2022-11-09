import React, { useState, useEffect } from 'react'
import Card from './Card';

const Library = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/books`)
        .then((res) => res.json())
        .then((aniInfo) => {
          setCards(aniInfo);
        });
      }, [cards]);

    const displayCards = cards.map((book) => (
        <Card
          key={book.id}
          book={book}
        />
      ));
  return (
    <>
    {displayCards}
    </>
  )
}

export default Library