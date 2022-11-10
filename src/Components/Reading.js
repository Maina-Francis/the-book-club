import React from 'react'
import ReadingCard from './ReadingCard';

const Reading = ({lib, reading, setReading}) => {
  const displayCards = lib.map((book) => (
    <ReadingCard
      key={book.id}
      book={book}
      reading={reading}
      setReading={setReading}
    />
  ));
  return (
    <div className='reading-items'>
      <div className="reading-items-header">Currently Reading</div>

      {lib.length === 0 &&(
        <div className='reading-items-empty'>No items are added.</div>
      )}
    {displayCards}
    </div>
  )
}

export default Reading