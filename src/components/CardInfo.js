import React from "react";

const CardInfo = () => {
  return (
    <div className="CardInfo">
      <div className="top-row">
        <div className="img-single">
          <img src="" alt="" />
        </div>
        <div className="ingredients">
          <ul>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>
            <li>ingredients</li>
          </ul>
        </div>
      </div>

      <div className="health">
        <p>Health Labels:</p>
        <span>peanut-free</span>
        <span>peanut-free</span>
        <span>peanut-free</span>
      </div>
    </div>
  );
};

export default CardInfo;
