import React from "react";
import Card from "./Cards";
import { api } from "../utils/Api";
import { setCards, setIsCardLike } from "../redux/actions/cards";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./Filter";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const cards = useSelector(({ cards }) => cards.items);
  const [isLike, setIsLike] = useState(false);

  React.useEffect(() => {
    api
      .getCards()
      .then((res) => {
        dispatch(setCards(res.map((card) => ({ ...card, isLiked: false }))));
      })
      .catch((err) => {
        console.log(`Ошибка при загрузке данных ${err}`);
      });
  }, [dispatch]);

  function handleCardDelete(card) {
    const newArr = cards.filter((c) => c.id !== card.id);
    dispatch(setCards(newArr));
  }

  function toggleLikeClick() {
    setIsLike(!isLike);
  }

  function toggleCardLike(id, isLiked) {
    dispatch(setIsCardLike(id, isLiked));
  }

  return (
    <div className="App">
      <div className="page">
        <main className="content">
          <section className="profile">
            <div className="profile__info">
              <h1 className="profile__title">React</h1>
              <Filter onClick={toggleLikeClick} />
            </div>
          </section>
          <section className="elements">
            {cards
              .filter((card) => (isLike ? card.isLiked === true : true))
              .map((element) => (
                <Card
                  card={element}
                  key={element.id}
                  onCardDelete={handleCardDelete}
                  onCardLike={toggleCardLike}
                />
              ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
