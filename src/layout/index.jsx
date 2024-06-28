import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"
import { memo } from "react"

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default memo(Layout)