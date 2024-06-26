import { FaRegUser, FaSearch } from "react-icons/fa"
import { GoHeart } from "react-icons/go"
import { PiShoppingCartSimple } from "react-icons/pi"
import { Link, NavLink } from "react-router-dom"
import Search from "../search"
import "./Header.scss"
import { memo, useState } from "react"
import { RiCloseLargeFill } from "react-icons/ri"
import siteLogo from "../../assets/images/header/logo.svg"
import { CgMenuRight } from "react-icons/cg"
import { IoArrowDownCircle, IoCloseCircleOutline } from "react-icons/io5"
import { FiHome } from "react-icons/fi"
import { useSelector } from "react-redux"
const Header = () => {
    const [searchMenu, setSearchMenu] = useState(false)
    const [menu, setMenu] = useState(false)
    const [shrink, setShrink] = useState(0)
    const wishlistSlice = useSelector(state => state.wishlist.value)
    const cartSlice = useSelector(state => state.cart.value)
    let isLogin = useSelector(state => state.auth.token)
    window.addEventListener("scroll", () => {
        setShrink(scrollY)
    })
    const handelCloseMenu = () => {
        setMenu(false)
    }
    const handelTop = () => {
        scroll(0, 0)
    }
    return (
        <>
            {
                shrink > 100 ?
                    <button className="bac_top" onClick={handelTop}><IoArrowDownCircle /></button>
                    : <></>
            }
            <div className="top-header">
                <div className="container top-header__wrapper">
                    <div className="top-header__left-box">
                        <select name="">
                            <option value="us">US</option>
                            <option value="ru">RU</option>
                            <option value="uz">UZ</option>
                        </select>
                        <select name="">
                            <option value="us">USD</option>
                            <option value="ru">RUB</option>
                            <option value="uz">UZS</option>
                        </select>
                    </div>
                    <div className="top-header__right-box">
                        <NavLink onClick={handelCloseMenu} to={isLogin ? "/admin" : "/login"} className="top-header__link-icons">
                            <FaRegUser />
                            <p>{isLogin ? "Account" : "/Login"}</p>
                        </NavLink>
                        <NavLink onClick={handelCloseMenu} to={"/wishlist"} className="top-header__link-icons">
                            <GoHeart />
                            <p>Like</p>
                            {
                                wishlistSlice.length === 0 ? <></>
                                    :
                                    <span>{wishlistSlice.length}</span>
                            }
                        </NavLink>
                        <NavLink onClick={handelCloseMenu} to={"/cart"} className="top-header__link-icons">
                            <PiShoppingCartSimple />
                            <p>Cart</p>
                            {
                                cartSlice.length === 0 ? <></>
                                    :
                                    <span>{cartSlice.length}</span>
                            }
                        </NavLink>
                        <Link onClick={handelCloseMenu} className="top-header__item-text"> Items</Link>
                        <div className="top-header__search-box">
                            <button onClick={() => setSearchMenu(p => !p)} className="top-header__search-btn">
                                {
                                    searchMenu ?
                                        <RiCloseLargeFill />
                                        :
                                        <FaSearch />
                                }
                                <p>Explore</p>
                            </button>
                            <Search searchMenu={searchMenu} setSearchMenu={setSearchMenu} />
                        </div>
                        <NavLink onClick={handelCloseMenu} to={"/"} className="top-header__item-home">
                            <FiHome />
                            <p>Home</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <header className={`header ${shrink > 55 ? "header__shrink" : ""}`}>
                <nav className="header__navbar container">
                    <Link to={"/"} className="header__logo-link">
                        <img src={siteLogo} alt="Site logo image" />
                        <h1 className="header__logo-title">E-COMMERS</h1>
                    </Link>
                    <div onClick={() => setMenu(false)} className={`header__overly ${menu ? "header__overly__show" : ""}`}></div>
                    <ul className={`header__list ${menu ? "header__list__show" : ""}`}>
                        <li className="header__close-item">
                            <button onClick={() => setMenu(false)} className="header__link"><IoCloseCircleOutline /></button>
                        </li>
                        <li className="header__item">
                            <NavLink onClick={handelCloseMenu} to={"/"} className="header__link">HOME</NavLink>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">BAGS</a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">SNEAKERS</a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">BELT</a>
                        </li>
                        <li className="header__item">
                            <NavLink onClick={handelCloseMenu} to={"/contact"} className="header__link">CONTACT</NavLink>
                        </li>
                    </ul>
                    <button onClick={() => setMenu(true)} className="header__menu-btn"><CgMenuRight /></button>
                </nav>
            </header>
        </>
    )
}

export default memo(Header)