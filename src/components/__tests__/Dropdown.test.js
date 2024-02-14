import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import { Provider } from "react-redux";
import { store } from "../../utlis/Redux/store";

describe("Dropdown Test Cases", () => {
  test("Initial render of dropdown with default options", () => {
    render(
      <Provider store={store}>
        <Dropdown />
      </Provider>
    );

    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveTextContent("User 1");
    expect(options[1]).toHaveTextContent("User 2");
    expect(options[2]).toHaveTextContent("User 3");
  });
});
