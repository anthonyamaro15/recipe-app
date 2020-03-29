import React from "react";
import { useParams } from "react-router-dom";

const CardInfo = ({ data }) => {
  //   console.log(data);
  const { id } = useParams();

  //   console.log(Number(id).toFixed(4));

  const singleCard = data.find(item => item.recipe.calories === Number(id));
  //   const { image, ingredients, healthLabels } = singleCard;
  console.log("sin", singleCard.recipe);
  return (
    <div className="CardInfo">
      <div className="top-row">
        <div className="img-single">
          <img src={singleCard.recipe.image} alt="" />
        </div>
        <div className="ingredients">
          <ul>
            {singleCard.recipe.ingredientLines.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
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
