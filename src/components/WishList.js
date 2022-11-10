import React, { useState } from "react";

const WishList = ({ books, setbooks}) => {
  const [wishListForm, setWishListForm] = useState({
    id: 0,
    title: "",
    image_url: "",
    genre: "",
    publisher: "",
    author: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setWishListForm({
      ...wishListForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://react-anime-merch-api.herokuapp.com/data`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wishListForm),
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = [...books, data];
        setbooks(newData);
      });
    e.target.reset();
  };

  return (
    <div className="container">
      <h2 className="mb-3 text-center">Contribute to our Library</h2>
      <p className="mb-3">
      In case you feel there is an educative interesting  book we need to add to our library
       feel free  to request them by filling in the necessary details in the form.
      </p>
      <div className="row d-flex justify-content-center mt-5 mb-3">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Contribute Book Details Form</h4>
              <div className="mb-3">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter the title of the book"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="image-url"
                  placeholder="Enter image url"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Genre</label>
                <input
                  type="text"
                  className="form-control"
                  name="genre"
                  placeholder="Enter book genre"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Publisher</label>
                <input
                  type="text"
                  className="form-control"
                  name="publisher"
                  placeholder="Enter book publisher"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Author</label>
                <input
                  type="text"
                  className="form-control"
                  name="author_id"
                  placeholder="Enter Author name"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label>Rating</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="Enter the rating of the book"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};


export default WishList;