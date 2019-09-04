let initialState = {
  users: [],
  nat: ""
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: action.users
      };
    case "SET_NAT":
      return {
        ...state,
        nat: action.nat
      };
    default:
      return {
        ...state
      };
  }
};

export default mainReducer;
