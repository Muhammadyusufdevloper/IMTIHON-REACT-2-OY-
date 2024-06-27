import Banners from "./components/banners"
import BestSeller from "./components/best-seller"
import FeaturedProducts from "./components/featured-products"
import Hero from "./components/hero"
import LatestNews from "./components/latest-news"
import Service from "./components/service"
import SneakersAdidas from "./components/sneakers-adidas"

const Home = () => {
  return (
    <>
      <Hero />
      <Banners />
      <BestSeller />
      <SneakersAdidas />
      <Service />
      <LatestNews />
      <FeaturedProducts />
    </>
  )
}

export default Home