import { render,screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import indexStore from "../utils/indexStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


jest.mock('../images/logo-cravings.png', () => 'logo-cravings.png');
jest.mock("../images/menu.png", () => "menu.png");
jest.mock("../images/back.png", () => "back.png");
jest.mock("../images/cart-cravings.png", () => "cart-cravings.png");

it("Should render header",()=>{
    render(
        <BrowserRouter>
        <Provider store={indexStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    expect(screen.getByText("0")).toBeInTheDocument();
    

});
