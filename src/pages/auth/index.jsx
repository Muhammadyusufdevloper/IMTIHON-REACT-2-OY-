import { Navigate, Outlet } from "react-router-dom"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useSelector } from "react-redux"


const Auth = () => {
  let isLogin = useSelector(state => state.auth.token)
  return (
    <>
      <Header />
      {isLogin ? <Outlet /> : <Navigate replace to={"/login"} />}
      <Footer />
    </>
  )
}

export default Auth