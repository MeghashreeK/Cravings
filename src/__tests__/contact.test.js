import { render,screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("A button should be present",()=>{
  render(<Contact/>);

  //Querying
  const inputs=screen.getAllByRole("textbox");

  //Assertion
  expect(inputs.length).toBe(2);

});
