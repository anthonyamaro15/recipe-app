import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="img-container">
          <img src="" alt="" className="img" />
        </div>

        <div className="description">
          <h3>chicken</h3>
          <Link to="/recipe">more information</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
