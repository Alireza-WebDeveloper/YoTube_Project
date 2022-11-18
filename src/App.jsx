import React from 'react';
import { ThemeStore } from './Context/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShareLayOut from './Components/Pages/ShareLayOut';
import ChannelDetail from './Components/Pages/ChanncelDetail';
import VideoDetail from './Components/Pages/VideoDetail';
import SearchDetail from './Components/Pages/SearchDetail';
import Home from './Components/Pages/Home';
import { ActiveSideBarStore } from './Context/ActiveSideBarTab';
import HistoryDetail from './Components/Pages/HistoryDetail';
import { useEffect } from 'react';
import Aos from 'aos';
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 400, easing: 'ease-in-sine', delay: 100 });
  }, []);
  return (
    <ThemeStore>
      <ActiveSideBarStore>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<ShareLayOut />}>
              <Route index element={<Home />} />
              <Route path="video/:id" element={<VideoDetail />} />
              <Route path="channel/:id" element={<ChannelDetail />} />
              <Route path="search/:searchQuery" element={<SearchDetail />} />
              <Route path="history" element={<HistoryDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ActiveSideBarStore>
    </ThemeStore>
  );
};

export default App;
