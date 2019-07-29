import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

const ADD_ITEM = "ADD_ITEM";

const addItem = (name, price) => {
  return {
    type: "ADD_ITEM",
    item: {
      name: name,
      price: price
    }
  };
};

const items = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "DELETE_ITEM":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const filter = (state = [], action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const discount = (state = "none", action) => {
  switch (action.type) {
    case "SET_DISCOUNT":
      return action.discount;
    default:
      return state;
  }
};

const reducer = combineReducers({
  items,
  filter,
  discount
});

const store = createStore(reducer);

const state = store.getState();
console.log("im state: ", state);

const dispatched = store.dispatch(addItem("apple"));
console.log("im dispatched: ", dispatched);
console.log("im getState: ", store.getState());

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
