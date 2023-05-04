import React from "react";
import "./App.css";
import "./styles.css";
import HorizontalScroll from "./components/HorizontalScroll";
import { ThemeProvider } from "./ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<div className="App">
				<HorizontalScroll />
			</div>
		</ThemeProvider>
	);
}

export default App;
