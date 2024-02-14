import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Cards from "../Cards.js";
import { store } from "../../utlis/Redux/store.js";

describe("Cards Component", () => {
  it("renders 4 cards initially", () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );
    const cards = screen.getAllByRole("card");
    expect(cards).toHaveLength(4);
    // Assertion: Check if each card has correct content
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(`Card ${index + 1}`);
    });
  });
});
