import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";
import { RouterProvider } from "./context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <RouterProvider>
          <App />
        </RouterProvider>
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
