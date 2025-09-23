import Header from "./components/Header";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Router />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
