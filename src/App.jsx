import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/home"
import SingleRout from "./pages/single-rout"
import Wishlist from "./pages/wishlist"
import Contact from "./pages/contact"
import Login from "./pages/login"
import Admin from "./pages/admin"
import Auth from "./pages/auth"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="single-rout/:id" element={<SingleRout />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App