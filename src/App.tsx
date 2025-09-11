import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import Latest from "./pages/Latest";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>
    </Router>
  );
}

export default App;
