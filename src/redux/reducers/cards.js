const initialState = {
  items: [],
  isLoaded: false,
};

const cardsReducer = (state = initialState, action) => {
  if (action.type === "SET_CARDS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  if (action.type === "SET_CARDS_LIKE") {
    return {
      ...state,
      items: state.items.map((item) => ({
        ...item,
        isLiked:
          action.payload.id === item.id ? action.payload.isLiked : item.isLiked,
      })),
    };
  }

  return state;
};

export default cardsReducer;
