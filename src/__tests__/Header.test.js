import { render, screen } from "@testing-library/react";
import Header from "../components/Header"
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import indexStore from "./utils/indexStore";
import { BrowserRouter } from "react-router-dom";

it("Should show the button", () => {

    render(
        <BrowserRouter>
        <Provider store={indexStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

})
