import { useEffect, useState } from "react";
import axios from "axios";

const CardItem = ({ data: { id, name, status, species, gender, image } }) => {
  return (
    <div className="cardItem">
      <div>
        <img className="thumb" src={image} alt="Thumbnail" />
      </div>
      <div className={species === "Human" ? "species" : "alien"}>{species}</div>

      <div className="name">{name}</div>
      <div className="row">
        <div>
          <strong>Id - </strong>
          {id}
        </div>
        <div>
          <strong>Status - </strong>
          {status}
        </div>
      </div>
      <div className="row">
        <div>
          <strong>Gender - </strong>
          {gender}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
