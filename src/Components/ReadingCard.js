import React from 'react'

const ReadingCard = ({book}) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={book.image_url}
            className="card-img-top"
            alt="..."
            height={330}
          />
          <div className="card-body">
            <h4 className="card-title">{book.title}</h4>
            <p className="card-text">{book.author}</p>
            <small className="text-muted">{book.genre}</small>
            <p className="card-text">{book.publisher}</p>
            <p className="card-text text-success">{book.rating}⭐⭐⭐⭐</p>
            <div className="card-button row d-flex justify-content-between">
              <button
                onClick={()=>{}}
                className="btn btn-danger ms-2 mb-1 justify-content-center"
                style={{ width: "150px" }}
              >
                Remove from current
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadingCard