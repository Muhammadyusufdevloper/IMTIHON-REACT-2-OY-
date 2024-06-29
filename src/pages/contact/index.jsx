import "./Contact.scss";
import img from "../../assets/images/contact/Union.png";
import { memo, useEffect } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import { toast } from "react-toastify";

const BOT_TOKEN = "7013249821:AAFDSaR0qTUXBBP4usbnqPK-FfEKx5Sw_yI"
const CHAT_ID = "-4266281101"
const initialState = {
    fullName: "",
    email: "",
    message: ""
};

const Contact = () => {
    const { formData, handleChange, setFormData } = useGetValue(initialState);
    useEffect(() => {
        scroll(0, 0)
    }, [])
    const handleSendMessage = (e) => {
        e.preventDefault();
        const text = `Ism: ${formData.fullName}%0AEmail: ${formData.email}%0AHabar: ${formData.message}`;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.onload = () => {
            if (api.status === 200) {
                toast.success("Ma'lumot saqlandi");
                setFormData(initialState)
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
        <>
            <section className="contact">
                <div className="container">
                    <div className="contact__wrapper">
                        <div className="contact__info-box">
                            <h1>Get in touch</h1>
                            <p>contact@e-comm.ng</p>
                            <p>+234 4556 6665 34</p>
                            <p>20 Prince Hakerem Lekki <br />
                                Phase 1, Lagos.</p>
                            <div className="contact__img-box">
                                <img src={img} alt="contact" />
                            </div>
                        </div>
                        <form onSubmit={handleSendMessage} className="contact__form">
                            <div>
                                <label htmlFor="full-name">Fullname</label>
                                <input
                                    required
                                    onChange={handleChange}
                                    value={formData.fullName}
                                    name="fullName"
                                    id="full-name"
                                    type="text"
                                    placeholder="James Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    required
                                    onChange={handleChange}
                                    value={formData.email}
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="jamesdoe@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    onChange={handleChange}
                                    value={formData.message}
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <form className="contact__search-form">
                        <input
                             type="text" placeholder="Search query..." />
                        <button type="button">Search</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default memo(Contact);