import { render,screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import indexStore from "../utils/indexStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


jest.mock('../images/logo-cravings.png', () => 'logo-cravings.png');
it("Should render header",()=>{
    render(
        <BrowserRouter>
        <Provider store={indexStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    
    expect(screen.getByText("Cart-(0Items)")).toBeInTheDocument();
    

});
