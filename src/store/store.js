import { createStore } from "redux";

let reducer = (state, action) => {
  if (action.type === 'push-portfolio') {
    return {
      ...state,
      portfolio: action.portfolio
    }
  }
  return state;
};
const store = createStore(
  reducer,
  {
    userId: null,
    loggedIn: false,
    portfolio: []
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;