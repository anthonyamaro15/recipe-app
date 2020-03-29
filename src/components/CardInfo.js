import React from "react";
import { useParams } from "react-router-dom";

const CardInfo = ({ data }) => {
  const { id } = useParams();

  const singleCard = data.find(item => item.recipe.calories === Number(id));

  return (
    <div className="CardInfo">
      <div className="top-row">
        <div className="img-single">
          <img src={singleCard.recipe.image} alt="" />
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {singleCard.recipe.ingredientLines.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
          <p>
            Visit{" "}
            <a
              href={`${singleCard.recipe.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {singleCard.recipe.source}
            </a>
          </p>
        </div>
      </div>

      <div className="health">
        <p>Health Labels:</p>

        {singleCard.recipe.healthLabels.map((helth, i) => (
          <span key={i}>{helth}</span>
        ))}
      </div>
    </div>
  );
};

export default CardInfo;
