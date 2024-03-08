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

// it("Should render restaurantmenu", async () => {

//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={indexStore}>
//                     <RestaurantMenu />
//                     <Header />
//                     <Cart />
//                 </Provider>
//             </BrowserRouter>
//         );
//     })


//     const accordianHeader = screen.getByText("Veg Pizza (14)");
//     expect(accordianHeader).toBeInTheDocument();

//     fireEvent.click(accordianHeader);

//     expect(screen.getAllByTestId("foodItems").length).toBe(14);

//     const addButton = screen.getAllByRole("button", { name: "Add+" });
//     const addButtonLength = addButton.length;
//     expect(addButtonLength).toBe(14);

//     fireEvent.click(addButton[1]);


//     expect(screen.getByText("Cart-(1Items)")).toBeInTheDocument();

//     fireEvent.click(addButton[3]);

//     expect(screen.getByText("Cart-(2Items)")).toBeInTheDocument();

//     expect(screen.getAllByTestId("foodItems").length).toBe(16);

//     const clearCart = screen.getByText("Clear Cart");
//     expect(clearCart).toBeInTheDocument();

//     fireEvent.click(clearCart);

//     expect(screen.getAllByTestId("foodItems").length).toBe(14);

//     expect(screen.getByText("Looks like your cart is on a diet! Let's feed it with some delicious delights!")).toBeInTheDocument();


// })

it("Should select a accordian and open it", async () => {

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

    const accordianHeader = screen.getByText("Veg Pizza (14)");
    expect(accordianHeader).toBeInTheDocument();

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

})

it("Should check the add button", async () => {

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

    const addButton = screen.getAllByRole("button", { name: "Add+" });
    const addButtonLength = addButton.length;
    // expect(addButtonLength).toBe(14);
    console.log(addButtonLength);

    fireEvent.click(addButton[1]);

    expect(screen.getByText("Cart-(1Items)")).toBeInTheDocument();

})

// it("Should check the add button", async () => {

//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={indexStore}>
//                     <RestaurantMenu />
//                     <Header />
//                     <Cart />
//                 </Provider>
//             </BrowserRouter>
//         );
//     })

//     expect(screen.getByText("Cart-(2Items)")).toBeInTheDocument();

//     expect(screen.getAllByTestId("foodItems").length).toBe(16);

// })

// it("Should check the clear cart feature", async () => {

//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={indexStore}>
//                     <RestaurantMenu />
//                     <Header />
//                     <Cart />
//                 </Provider>
//             </BrowserRouter>
//         );
//     })

//     const clearCart = screen.getByText("Clear Cart");
//     expect(clearCart).toBeInTheDocument();

//     fireEvent.click(clearCart);

//     expect(screen.getAllByTestId("foodItems").length).toBe(14);

// })

// it("Should check the clear cart feature", async () => {

//     await act(async () => {
//         render(
//             <BrowserRouter>
//                 <Provider store={indexStore}>
//                     <RestaurantMenu />
//                     <Header />
//                     <Cart />
//                 </Provider>
//             </BrowserRouter>
//         );
//     })

//     expect(screen.getByText("Looks like your cart is on a diet! Let's feed it with some delicious delights!")).toBeInTheDocument();
// })


