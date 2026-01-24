import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ScrollProider } from "./Context/ScrollContext.tsx";
import { ThemeProvider } from "./Context/ThemeContext.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
	<ScrollProider>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</ScrollProider>,
);
