import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import App from "./App";


describe("App component", () => {

	const component = shallow(<App />);

	it("renders and has only 1 div element", () => {

		expect(component.find("div")).toHaveLength(1);
	
	});
  
	it("renders correctly", () => {

		expect(toJSON(component)).toMatchSnapshot();
	
	});

});
