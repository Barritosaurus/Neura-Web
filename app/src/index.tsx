import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoute from "./pages/AppRoute";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Applications from "./pages/Applications";
import Opportunities from "./pages/Opportunities";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppRoute />}>
                    <Route index element={<Landing />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="applications" element={<Applications />} />
                    <Route path="opportunities" element={<Opportunities />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,

);
