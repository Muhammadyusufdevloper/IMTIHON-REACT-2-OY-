import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"
import SingleRout from "./pages/single-rout"
import Wishlist from "./pages/wishlist"
import Contact from "./pages/contact"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact/>} />
          <Route path="single-rout/:id" element={<SingleRout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App