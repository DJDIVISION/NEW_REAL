import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import PartnersPage from "./pages/PartnersPage";
import TeamPage from "./pages/TeamPage";
import NewsPage from "./pages/NewsPage";
import GamingPage from "./pages/GamingPage";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

function App() {

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };


  return (
    <Router>
      <ScrollToTop>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/partnerspage" element={<PartnersPage />}/>
            <Route exact path="/teampage" element={<TeamPage />}/>
            <Route exact path="/gamingpage" element={<GamingPage />}/>
            <Route exact path="/newspage" element={<NewsPage />}/>
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
