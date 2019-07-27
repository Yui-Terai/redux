import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

const ADD_ITEM = "ADD_ITEM";

const action = {
  type: ADD_ITEM,
  item: "apple"
};

const addItem = item => {
  return {
    type: "ADD_ITEM",
    item: item
  };
};

//reducer
const reducer = (state = [], action) => {
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

var store = createStore(reducer);

console.log(store.dispatch(addItem("a")));
console.log(store.getState());
console.log(store.dispatch(addItem("b")));
console.log(store.getState());
console.log(store.dispatch(addItem("c")));
console.log(store.getState());

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
