import "./Product.scss"
import reteImg from "../../assets/images/product/rate.svg"
import { TiHeartOutline } from "react-icons/ti"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleHeart } from "../../context/slices/wishlistSlice"
import { AiFillHeart } from "react-icons/ai"
import { memo } from "react"
import { addToCart } from "../../context/slices/cartSlice";
const Product = ({ products, isSingle }) => {
    let dispatch = useDispatch()
    let wishlistSlice = useSelector(state => state.wishlist.value)
    console.log(wishlistSlice);
    const product = products?.map(product => (
        <div key={product.id} className="product__card">
            <div className="product__img-box">
                <img src={product.image} alt={product.title} />
                <div className="product__hover-box">
                    <div>
                        <button onClick={() => dispatch(toggleHeart(product))} className="product__like-btn">
                            {
                                wishlistSlice.some((el) => el.id === product.id) ?
                                    <AiFillHeart />
                                    :
                                    <TiHeartOutline />
                            }
                        </button>
                        <button onClick={() => dispatch(addToCart(product))} className="product__like-btn">
                            <MdOutlineShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
            {
                isSingle ?
                    <Link to={`/single-rout/${product.id}`}>
                        <div className="product__info-box">
                            <h3 className="product__title">
                                {product.title}
                            </h3>
                            <img src={reteImg} alt="rete img" />
                            <div className="product__price-card">
                                <p className="product__price">${product.price}</p>
                                <p className="product__old-price">${(product.price + (product.price * 0.24)).toFixed(3)}</p>
                                <p className="product__discount">24% Off</p>
                            </div>
                        </div>
                    </Link>
                    :
                    <div className="product__info-box">
                        <h3 className="product__title">
                            {product.title}
                        </h3>
                        <img src={reteImg} alt="rete img" />
                        <div className="product__price-card">
                            <p className="product__price">${product.price}</p>
                            <p className="product__old-price">${(product.price + (product.price * 0.24)).toFixed(3)}</p>
                            <p className="product__discount">24% Off</p>
                        </div>
                    </div>
            }
        </div >
    ))
    return (
        <>
            <section className='product'>
                <div className=''>
                    <div className='product__cards'>
                        {product}
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Product);