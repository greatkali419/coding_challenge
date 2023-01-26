import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout2";
import ProductPostPage from "./pages/ProductPostPage";
import ProductPage from "./pages/ProductPage";
import AuctionPage from "./pages/AuctionPage";
import AuctionPostPage from "./pages/AuctionPostPage";
import DropPage from "./pages/DropPage";
import CartPage from "./pages/CartPage";
import {AnimatePresence} from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import Thankyou from "./pages/Thankyou";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/coding_challenge" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="thanks" element={<Thankyou />} />
        
        <Route path="products">
        <Route index element={<ProductPage />} />

          <Route path="page" element={<ProductPostPage />} />
          <Route path="cart" element={<Layout2 />}>
            <Route index element={<CartPage />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>      
        <Route path="auctions">
        <Route index element={<AuctionPage />} />

        </Route>
        <Route path="drop">
        <Route index element={<DropPage />} />


        </Route>
      </Route>
      <Route path="live">
      <Route index element={<AuctionPostPage />} />
      </Route>

    </Routes>
    </AnimatePresence>
  );
}

export default App;
