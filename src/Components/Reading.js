import React from "react";
import ReadingCard from "./ReadingCard";

const Reading = ({ reading, setReading, handleRemove }) => {
  const displayCards = reading.map((book) => (
    <ReadingCard
      key={book.id}
      book={book}
      reading={reading}
      setReading={setReading}
      handleRemove={handleRemove}
    />
  ));
  return (
    <div className="reading-items">
      <div className="reading-items-header"><h2>Currently Reading</h2></div>

      {reading.length === 0 && (
        <div className="reading-items-empty"><h6>There are currently no books.</h6></div>
      )}
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {displayCards}
        </div>
      </div>
    </div>
  );
};

export default Reading;
