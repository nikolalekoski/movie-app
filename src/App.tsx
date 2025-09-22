import Header from "./components/Header";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
