import RestaurantMenu from "../components/RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mockData.js/resMenuMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import indexStore from "../utils/indexStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";



jest.mock("../images/logo-cravings.png", () => "logo-cravings.png");

global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(MOCK_DATA);
            }
        }
    )
})

it("Should check the cart feature", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={indexStore}>
                    <RestaurantMenu />
                    <Header />
                    <Cart />
                </Provider>
            </BrowserRouter>
        );
    })

    //if accordian is present click and open it
    const accordianHeader = screen.getByText("Veg Pizza (14)");

    expect(accordianHeader).toBeInTheDocument();

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    //check the whether add+ button is present & select a food item by clicking on it
    const addButton = screen.getAllByRole("button", { name: "Add+" });

    const addButtonLength = addButton.length;

    expect(addButtonLength).toBe(14);

    fireEvent.click(addButton[1]);

    //one item should be added on the header cart
    expect(screen.getByText("Cart-(1Items)")).toBeInTheDocument();

    //select another food item
    fireEvent.click(addButton[3]);

    //two item should be added on the header cart
    expect(screen.getByText("Cart-(2Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(16);

    //clear cart feature
    const clearCart = screen.getByText("Clear Cart");

    expect(clearCart).toBeInTheDocument();

    fireEvent.click(clearCart);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    expect(screen.getByText("Looks like your cart is on a diet! Let's feed it with some delicious delights!")).toBeInTheDocument();
})




