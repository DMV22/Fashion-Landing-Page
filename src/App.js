import "./App.css";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Favourites from "./components/favourites/Favourites";
import Vouchers from "./components/vouchers/Vouchers";
import Community from "./components/community/Community";

function App() {
  return (
    <>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favourites />
      <Vouchers />
      <Community />
    </>
  );
}

export default App;
