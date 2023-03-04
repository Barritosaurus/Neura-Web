import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    );
    const linkElement = screen.getByText(/Landing/i);
    expect(linkElement).toBeInTheDocument();
});
