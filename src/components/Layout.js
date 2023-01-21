import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import { useState } from "react";

const Layout = () => {
  const [ navMenu, setNavMenu] = useState('');
  const [ homeLine, setHomeLine] = useState('');
  const [ marketLine, setMarketLine] = useState('');
  const [ auctionLine, setAuctionLine] = useState('');
  const [ dropLine, setDropLine] = useState('');

  const handleOpenMenu = ()=> {
    setNavMenu('0')
  }
  const handleCloseMenu =()=> {
    setNavMenu('-100%')
  }
  const handleHomeline = ()=> {
     setHomeLine("underline")
     setMarketLine("none")
     setAuctionLine("none")
     setDropLine("none")
  }
  const handleMarketline = ()=> {
     setMarketLine("underline")
     setHomeLine("none")
     setAuctionLine("none")
     setDropLine("none")
  }
  const handleAuctionline = ()=> {
     setAuctionLine("underline")
     setMarketLine("none")
     setDropLine("none")
     setHomeLine("none")
  }
  const handleDropline = ()=> {
     setDropLine("underline")
     setAuctionLine("none")
     setMarketLine("none")
     setHomeLine("none")
  }
  return (
    <div className="App">
      <Navbar navMenu={navMenu} setNavMenu={setNavMenu} handleCloseMenu={handleCloseMenu} handleOpenMenu={handleOpenMenu} handleHomeline={handleHomeline} setHomeLine={setHomeLine} homeLine={homeLine} 
       marketLine={marketLine} setMarketLine={setMarketLine} handleMarketline={handleMarketline} auctionLine={auctionLine} setAuctionLine={setAuctionLine} handleAuctionline={ handleAuctionline} dropLine={dropLine}setDropLine={setDropLine}
       handleDropline={handleDropline}
      />
      <Outlet />
    </div>
  )
}

export default Layout