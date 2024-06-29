import { FiMinus } from "react-icons/fi";
import imgDelete from "../../assets/images/cart/delete.png";
import emptyImg from "../../assets/images/cart/empty.png";
import { FaPlus } from "react-icons/fa";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAmount, increaseAmount, removeCart } from "../../context/slices/cartSlice";
import { memo, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CartModal from "../../components/cart-modal";

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [voucher, setVoucher] = useState(0);
    const [inpValue, setInpValue] = useState("laylo");
    const [close, setClose] = useState(false);
    const cartSlice = useSelector(state => state.cart.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const total = cartSlice.reduce((sum, el) => sum + (el.price * el.amount), 0);
        setTotalPrice(total);
    }, [cartSlice]);

    useEffect(() => {
        scroll(0, 0);
    }, []);

    const handleVoucher = e => {
        e.preventDefault();
        if (inpValue === "laylo") {
            const discount = totalPrice * 0.24;
            setVoucher(discount);
            toast.success(`Voucher applied. You saved 24% (${discount.toFixed(2)})`);
        } else {
            toast.error("Invalid voucher code");
        }
    };

    const cartProduct = cartSlice.map(el => (
        <div key={el.id} className="cart__body-row">
            <div className="cart__body-item">
                <div className="cart__body-item-card">
                    <button onClick={() => dispatch(removeCart(el))} className="cart__body-btn-delete">
                        <img src={imgDelete} alt="delete button img" />
                    </button>
                    <Link to={`/single-rout/${el.id}`} className="cart__body-image-box">
                        <img src={el.image} alt={`${el.title} img`} />
                    </Link>
                    <h3 title={el.title} className="cart__body-title">{el.title}</h3>
                </div>
            </div>
            <div className="cart__header-body-list">
                <div className="cart__header-body-item">PRICE</div>
                <div className="cart__header-body-item">QTY</div>
                <div className="cart__header-body-item">UNIT PRICE</div>
            </div>
            <div className="cart__body-list">
                <div className="cart__body-item">
                    <p className="cart__body-price">${el.price}</p>
                </div>
                <div className="cart__body-item">
                    <div className="cart__body-buttons-card">
                        <button disabled={el.amount <= 0} onClick={() => dispatch(decreaseAmount(el))} className="cart__body-btn"><FiMinus /></button>
                        <p>{el.amount}</p>
                        <button disabled={el.count < el.amount} onClick={() => dispatch(increaseAmount(el))} className="cart__body-btn"><FaPlus /></button>
                    </div>
                </div>
                <div className="cart__body-item">
                    <p className="cart__body-price">${(el.price * el.amount).toFixed(2)}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {cartSlice.length === 0 ? (
                <div className="cart__empty">
                    <img src={emptyImg} alt="empty img" />
                    <Link to="/">Home</Link>
                </div>
            ) : (
                <section className="cart">
                    <div className="container">
                        <div className="cart__header">
                            <div className="cart__header-item">PRODUCT</div>
                            <div className="cart__header-list">
                                <div className="cart__header-item">PRICE</div>
                                <div className="cart__header-item">QTY</div>
                                <div className="cart__header-item">UNIT PRICE</div>
                            </div>
                        </div>
                        <div className="cart__body">{cartProduct}</div>
                        <div className="cart__bottom-wrapper">
                            <form onSubmit={handleVoucher} className="cart__form">
                                <input value={inpValue} onChange={e => setInpValue(e.target.value)} type="text" placeholder="Voucher code" />
                                <button>Redeem</button>
                            </form>
                            <div className="cart__bottom-card">
                                <div>
                                    <span>Subtotal</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div>
                                    <span>Shipping fee</span>
                                    <span>${(totalPrice * 0.01).toFixed(2)}</span>
                                </div>
                                <div>
                                    <span>Coupon</span>
                                    <span>${voucher.toFixed(2)}</span>
                                </div>
                                <div>
                                    <h3>TOTAL</h3>
                                    <h3>${(totalPrice - voucher).toFixed(2)}</h3>
                                </div>
                                <button onClick={() => setClose(true)}>Check out</button>
                                {close && <CartModal close={close} setClose={setClose} />}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default memo(Cart);
