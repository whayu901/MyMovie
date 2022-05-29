import * as React from "react";
import { Provider } from "react-redux";
import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react-native";

import Home from "../../home";
import { store } from "../../../redux/store";

describe("list testing", () => {
  test("Screen home test", async () => {
    const component = (
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const { getByTestId, getByText } = render(component);
  });
});
