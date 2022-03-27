import React from "react";
import Like from "./Like";

function Card({ card, onCardDelete, onCardLike }) {
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div>
      <article className="element">
        <button
          type="button"
          className="element__trasher"
          onClick={handleDeleteClick}
        ></button>
        <img
          src={card.download_url}
          alt={card.author}
          className="element__image"
        />
        <div className="element__info">
          <h2 className="element__title">{card.author}</h2>
          <div className="element__container">
            <Like
              onClick={() => onCardLike(card.id, !card.isLiked)}
              isLiked={card.isLiked}
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
