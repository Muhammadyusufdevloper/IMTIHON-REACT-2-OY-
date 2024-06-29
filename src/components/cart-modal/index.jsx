import { memo } from "react";
import "./cartModal.scss";
import { IoClose, IoCardOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { toast } from "react-toastify";
import { useGetValue } from "../../hooks/useGetValue";
import { useDispatch } from "react-redux";
import { deleteAllCart } from "../../context/slices/cartSlice";

const BOT_TOKEN = "7013249821:AAFDSaR0qTUXBBP4usbnqPK-FfEKx5Sw_yI";
const CHAT_ID = "-4266281101";
const initialState = {
  fname: "",
  lname: "",
  email: "",
  message: "",
  pay: "",
  phone: "",
};

const CartModal = ({ close, setClose }) => {
  const { formData, handleChange, setFormData } = useGetValue(initialState);
  const dispatch = useDispatch()
  const handleSendMessage = (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, message } = formData;
    let text = `User: %0A%0A`;
    text += `FName: ${fname} %0A`;
    text += `LName: ${lname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Phone: ${phone} %0A`;
    text += `Message: ${message}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);

    api.onload = () => {
      if (api.status === 200) {
        toast.success("Ma'lumot saqlandi");
        setFormData(initialState);
        setClose(false);
        dispatch(deleteAllCart())
      } else {
        toast.error("Ma'lumot saqlanmadi");
      }
    };

    api.onerror = () => {
      toast.error("Ma'lumot saqlanmadi");
    };

    api.send();
  };

  return (
    <div className="cart-modal">
      <div onClick={() => setClose(false)} className="cart-modal__overlay"></div>
      <form onSubmit={handleSendMessage} className="cart-modal__form">
        <div className="cart-modal__form__top">
          <div className="cart-modal__form__top__btns">
            <button type="button" onClick={() => setClose(false)}>
              <FaArrowLeftLong />
            </button>
            <button type="button" onClick={() => setClose(false)}>
              <IoClose />
            </button>
          </div>
          <h3 className="cart-modal__form__title">Make Payment</h3>
        </div>
        <div className="cart-modal__form__bottom">
          <div className="cart-modal__form__bottom__box">
            <input
              required
              className="cart-modal__form__input"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
            />
            <input
              required
              className="cart-modal__form__input"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
            />
            <input
              required
              className="cart-modal__form__input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="text"
              placeholder="Email Address"
            />
            <textarea
              className="cart-modal__form__textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Address for Delivery"
              cols="30"
              rows="10"
            ></textarea>
            <div className="cart-modal__form__bottom__pay">
              <div>
                <label htmlFor="card">
                  <IoCardOutline />
                  Credit Card Or Debit
                </label>
                <input
                  required
                  id="card"
                  type="radio"
                  name="pay"
                  value="Credit Card Or Debit"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="paypal">
                  <FaPaypal />
                  Paypal
                </label>
                <input
                  required
                  id="paypal"
                  type="radio"
                  name="pay"
                  value="Paypal"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="bank">
                  <BsBank />
                  Bank Transfer
                </label>
                <input
                  required
                  id="bank"
                  type="radio"
                  name="pay"
                  value="Bank Transfer"
                  onChange={handleChange}
                />
              </div>
            </div>
            <input
              required
              className="cart-modal__form__input"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="text"
              placeholder="Mobile Phone"
            />
          </div>
          <div className="cart-modal__form__bottom__btns">
            <button type="submit">Go to Payment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default memo(CartModal);
