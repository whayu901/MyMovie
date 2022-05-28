import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "../App";

describe("With React Testing Library", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it("render correctly", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
