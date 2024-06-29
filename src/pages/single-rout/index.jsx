import { MdShoppingCart, MdStarRate } from "react-icons/md";
import "./SingleRout.scss";
import { Link, useParams } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { TiHeartOutline, TiPlus } from "react-icons/ti";
import { FiMinus } from "react-icons/fi";
import Accordion from "./components/accardion";
import RelatedProduct from "./components/related-products";
import { memo, useEffect } from "react";
import { useGetProductByIdQuery } from "../../context/api/product-api";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { AiFillHeart } from "react-icons/ai";
import { addToCart, decreaseAmount, increaseAmount } from "../../context/slices/cartSlice";
import SingleLoading from "../../components/single-loading";

const SingleRout = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)
    let dispatch = useDispatch()
    console.log(data);
    let wishlistSlice = useSelector(state => state.wishlist.value)
    useEffect(() => {
        scroll(0, 0)
    }, [id])
    console.log(data?.amount);
    return (
        <>
            <section className="single-rout">
                <div className="single-rout__wrapper container">
                    <div className="single-rout__left-box">
                        {
                            isLoading ?
                                <SingleLoading />
                                :
                                <div className="single-rout__top-box">
                                    <div className="single-rout__top-box__img-wrapper">
                                        <div className="single-rout__top-box__max-img-card">
                                            <img src={data?.image} alt={data?.title} />
                                        </div>
                                        <div className="single-rout__top-box__small-img-card">
                                            <img src={data?.image} alt={data?.title} />
                                            <img src={data?.image} alt={data?.title} />
                                            <img src={data?.image} alt={data?.title} />
                                            <img src={data?.image} alt={data?.title} />
                                        </div>
                                    </div>
                                    <div className="single-rout__top-box__info-wrapper">
                                        <div className="single-rout__top-box__info-card">
                                            <h1 className="single-rout__title">{data?.title}</h1>
                                            <div className="single-rout__top-box__info-part">
                                                <div className="single-rout__top-box__star-box">
                                                    <MdStarRate />
                                                    <MdStarRate />
                                                    <MdStarRate />
                                                    <MdStarRate />
                                                    <MdStarRate />
                                                </div>
                                                <p className="single-rout__reviews-text">0 reviews</p>
                                                <Link className="single-rout__reviews-submit">Submit a review</Link>
                                            </div>
                                        </div>
                                        <div className="single-rout__top-box__info-card">
                                            <div className="single-rout__top-box__price-card">
                                                <p className="single-rout__price-text">${data?.price}</p>
                                                <p className="single-rout__old-price-text">${data?.price * 2}</p>
                                                <p className="single-rout__discount">24% Off</p>
                                            </div>
                                            <div className="single-rout__availability-card">
                                                <p>Availability:</p>
                                                <p>In stock</p>
                                            </div>
                                            <div className="single-rout__category-card">
                                                <p>Category:</p>
                                                <p>{data?.category}</p>
                                            </div>
                                        </div>
                                        <div className="single-rout__top-box__info-card">
                                            <div className="single-rout__top-box__select-color">
                                                <p className="single-rout__top-box__color-text">Select Color:</p>
                                                <div className="single-rout__top-box__color-radio-wrapper">
                                                    <input className="single-rout__top-box__color-input" type="radio" id="radio-1" name="color" />
                                                    <label htmlFor="radio-1"></label>
                                                    <input className="single-rout__top-box__color-input" type="radio" id="radio-2" name="color" />
                                                    <label htmlFor="radio-2"></label>
                                                    <input className="single-rout__top-box__color-input" type="radio" id="radio-3" name="color" />
                                                    <label htmlFor="radio-3"></label>
                                                    <input className="single-rout__top-box__color-input" type="radio" id="radio-4" name="color" />
                                                    <label htmlFor="radio-4"></label>
                                                </div>
                                            </div>
                                            <div className="single-rout__top-box__size-card">
                                                <p className="single-rout__top-box__color-text">Size</p>
                                                <select>
                                                    <option value="xs">Xs</option>
                                                    <option value="xs">Xl</option>
                                                    <option value="xs">2xl</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="single-rout__top-box__info-card single-rout__top-box__button-card">
                                            <div className="single-rout__top-box__count-buttons">
                                                <button disabled={data?.amount <= 0} onClick={() => dispatch(decreaseAmount(data))} className="single-rout__top-box__decrement-btn"><FiMinus /></button>
                                                <span>{data?.amount}</span>
                                                <button disabled={data?.count < data?.amount} onClick={() => dispatch(increaseAmount(data))} className="single-rout__top-box__increment-btn"><TiPlus /></button>
                                            </div>
                                            <div className="single-rout__top-box__cart-like-buttons">
                                                <button onClick={() => dispatch(addToCart(data))} className="single-rout__top-box__cart-btn">
                                                    <MdShoppingCart />
                                                    <p>Add To Cart</p>
                                                </button>
                                                <button onClick={() => dispatch(toggleHeart(data))} className="single-rout__top-box__like-btn">
                                                    {
                                                        wishlistSlice.some((el) => el.id === data?.id) ?
                                                            <AiFillHeart />
                                                            :
                                                            <TiHeartOutline />
                                                    }
                                                </button>
                                            </div>
                                        </div>
                                        <div className="single-rout__top-box__info-card single-rout__top-box__button-card">
                                            <button className="single-rout__top-box__facebook-btn">
                                                <BiLogoFacebook />
                                                <p>Share on Facebook</p>
                                            </button>
                                            <button className="single-rout__top-box__twitter-btn">
                                                <FaTwitter />
                                                <p>Share on Twitter</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className="single-rout__bottom-box">
                            <Accordion />
                        </div>
                    </div>
                    <div className="single-rout__right-box">
                        <p className="single-rout__right-box__text">BEST SELLER</p>
                        <div className="single-rout__right-box__card">
                            <div className="single-rout__right-box__img-box">
                                <img src={data?.image} alt={data?.image} />
                            </div>
                            <div className="single-rout__right-box__info">
                                <div className="single-rout__top-box__star-box">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                </div>
                                <div className="single-rout__top-box__price-card">
                                    <p className="single-rout__top-box__price-text">$499</p>
                                    <p className="single-rout__top-box__old-price-text">$599</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProduct />
            </section>
        </>
    );
};

export default memo(SingleRout);
