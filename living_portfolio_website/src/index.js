
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact-info";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route index element={<Home />} />
        <Route path='*' element={<NoPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));


//https://isotropic.co/react-multiple-pages/ Source for routing code