import { Navigate, Outlet } from "react-router-dom"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { useSelector } from "react-redux"
import { memo } from "react"


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

export default memo(Auth)