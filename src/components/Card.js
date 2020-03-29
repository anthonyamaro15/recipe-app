import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  //   console.log(item);
  const { label, image, calories } = item.recipe;
  //   const {id} = useParams();
  return (
    <div className="Card-container">
      <div className="Card">
        <div className="img-container">
          <img src={image} alt={label} className="img" />
        </div>

        <div className="description">
          <h3>{label}</h3>
          <Link to={`/recipes${calories}`}>more information</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
