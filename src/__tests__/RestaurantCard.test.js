import { render,screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_DATA from "../mockData.js/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render the props of RestaurantCard",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name=screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})