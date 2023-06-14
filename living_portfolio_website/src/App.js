import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {homepage} from './Pages/Home'

function App() {
  //Makes browser declare page.
  useEffect(() => {
    document.title = "LP - Home";
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<homepage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
