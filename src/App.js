import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
