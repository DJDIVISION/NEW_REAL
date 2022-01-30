import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index.js";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";
import TeamPage from "./pages/TeamPage";

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
                <Route exact path="/teampage" element={<TeamPage />}/>
              </Routes>
            </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
