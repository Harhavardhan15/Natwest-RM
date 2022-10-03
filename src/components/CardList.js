import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CardItem from "./CardItem";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [sort, setSort] = useState(false);
  useEffect(() => {
    if (cards.length) {
      if (sort) {
        setCards(
          JSON.parse(JSON.stringify(cards?.sort((a, b) => b.id - a.id)))
        );
      } else {
        setCards(
          JSON.parse(JSON.stringify(cards?.sort((a, b) => a.id - b.id)))
        );
      }
    }
  }, [sort]);

  return (
    <div>
      <SearchBar
        takeSort={sort}
        getSort={(val) => setSort(val)}
        updateData={(value) => setCards(value)}
      />
      {cards.length ? (
        <div className="cardContainer">
          {cards.map((item) => (
            <CardItem key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p>No search results</p>
      )}
    </div>
  );
};

export default CardList;
