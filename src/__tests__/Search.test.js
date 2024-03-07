import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MOCK_DATA from "../mockData.js/searchMock.json"
import Body from "../components/Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should check the searching feature", async () => {
    await act(async () => {

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

    })
    
    const cardsBeforeSearch = screen.getAllByTestId("rescard");
    expect(cardsBeforeSearch.length).toBe(9);

    const inputBox = screen.getByTestId("inputBox");
    expect(inputBox).toBeInTheDocument();

    const searchButton = screen.getByRole("button", { name: "search" });
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(inputBox, { target: { value: "Brik Oven - Original Sourdough Pizzas" } });
    fireEvent.click(searchButton);

    const cardsAfterSearch = screen.getAllByTestId("rescard");
    expect(cardsAfterSearch.length).toBe(1);
});



it("Should check the top rated restaurant feature",async()=>{
    await act(async () => {

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );

    })

    const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
    expect(topRatedButton).toBeInTheDocument();

    fireEvent.click(topRatedButton);

    const topRatedResCard=screen.getAllByTestId("rescard");
    expect(topRatedResCard.length).toBe(2);
})

