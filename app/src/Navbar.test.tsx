import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders learn react link", () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>,
    );
    const linkElement = screen.getByText(/Landing/i);
    expect(linkElement).toBeInTheDocument();
});
