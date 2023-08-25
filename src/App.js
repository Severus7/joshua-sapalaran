import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
