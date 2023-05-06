// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react";
import "./App.css";
import "./styles.css";
import HorizontalScroll from "./components/HorizontalScroll";
import { ThemeProvider } from "./ThemeContext";
import Background from "./components/Background";

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <Background />
                <HorizontalScroll />
            </div>
        </ThemeProvider>
    );
}

export default App;

