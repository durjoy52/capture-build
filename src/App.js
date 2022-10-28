import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from './pages/AboutUs';
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutUs/>}/>
        <Route path="/work" element={<OurWork/>}/>
        <Route path="/work/:id" element={<MovieDetail/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
