import { useSelector } from "react-redux"
import Product from "../../components/products"
import img from "../../assets/images/wishlist/wishlist.jpg"
import "./Wishlist.scss"
import { Link } from "react-router-dom"
import { memo } from "react"
const Wishlist = () => {
    const wishlistSlice = useSelector(state => state.wishlist.value)
    return (
        <>
            <section className="wishlist">
                <div className="container wishlist__wrapper">
                    {
                        wishlistSlice.length <= 0 ?
                            <div className="wishlist__image-box">
                                <img src={img} alt="wishlist empty" />
                                <Link to={"/"}>Home</Link>
                            </div>
                            :
                            < Product products={wishlistSlice} isSingle={true}/>
                    }
                </div>
            </section>
        </>
    )
}

export default memo(Wishlist)