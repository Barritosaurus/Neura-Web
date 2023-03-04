import React from "react";
import { Outlet } from "react-router-dom";
import App from "../App";

const AppRoute = () => {
    return (
        <>
            <App />
            <Outlet />
        </>
    );
};

export default AppRoute;
