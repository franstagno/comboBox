import React, { useState } from "react";
import ComboBox from "./ComboBox";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("select render", () => {
	it("renders appropriately", async () => {
		const choices = ["red", "blue"];
		render(<ComboBox choices={choices}></ComboBox>);
		const res = await screen.findAllByTestId("testOption");
		const length = await res.length;
		expect(length).toBe(2);
	});
});
