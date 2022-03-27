export const setCards = (items) => ({
  type: "SET_CARDS",
  payload: items,
});

export const setIsCardLike = (id, isLiked) => ({
  type: "SET_CARDS_LIKE",
  payload: { id, isLiked },
});

