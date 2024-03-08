import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import indexStore from "../utils/indexStore";
import { BrowserRouter } from "react-router-dom";


jest.mock('../images/logo-cravings.png', () => 'logo-cravings.png');
it("Should render header",()=>{
    render(
        <BrowserRouter>
        <Provider store={indexStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
});
