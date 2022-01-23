import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLoader from "./pages/index.js";
import HomeNoLoader  from "./pages/HomeNoLoader";
import PartnersPage from "./pages/PartnersPage";
import TeamPage from "./pages/TeamPage";
import NFTPage from "./pages/NFTPage";
import NewsPage from "./pages/NewsPage";
import TokenomicsPage from "./pages/TokenomicsPage";
import GamingPage from "./pages/GamingPage";
import RoadMap from "./pages/RoadMap"; 
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
                <Route exact path="/" element={<HomeLoader />}/>
                <Route exact path="/partnerspage" element={<PartnersPage />}/>
                <Route exact path="/homenoloader" element={<HomeNoLoader />}/>
                <Route exact path="/teampage" element={<TeamPage />}/>
                <Route exact path="/gamingpage" element={<GamingPage />}/>
                <Route exact path="/newspage" element={<NewsPage />}/>
                <Route exact path="/roadmap" element={<RoadMap />}/> 
                <Route exact path="/tokenomicspage" element={<TokenomicsPage />}/> 
                <Route exact path="/nftpage" element={<NFTPage />}/> 
              </Routes>
            </AnimatePresence>
      </ScrollToTop>
    </Router>
  );
}

export default App;
