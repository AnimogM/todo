export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "ADD_TODO":
      return state.map((category) => {
        if (category.id === action.category) {
          return { ...category, items: [...category.items, action.payload] };
        }
        return category;
      });
    case "DELETE_TODO":
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            items: category.items.filter(
              (item) => item.id !== action.payload.itemId
            ),
          };
        }
        return category;
      });

    case "COMPLETE":
      return state.map((category) => {
        if (category.id === action.payload.categoryId) {
          return {
            ...category,
            items: category.items.map((item) => {
              if (item.id === action.payload.itemId) {
                return { ...item, complete: !action.payload.complete };
              }
              return item;
            }),
          };
        }
        return category;
      });
    case "EDIT_TODO":
      return state.map((category) => {
          
        return category;
      });
    default:
      return state;
  }
};
