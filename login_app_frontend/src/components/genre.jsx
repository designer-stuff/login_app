import React from "react";
import { Link } from "react-router-dom";

const Genre = ({ genres }) => {
  return (
    <div className="container">
      <Link to="/api/logout" className="btn btn-sm btn-primary mt-4">
        Logout
      </Link> 
      <h1 className="h3 m-3 font-weight-normal">Genre</h1>
      <ul className="list-group">
        {genres.map(genre => (
          <li key={genre._id} className="list-group-item">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genre;
