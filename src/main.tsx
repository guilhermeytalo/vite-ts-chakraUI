import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);