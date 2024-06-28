import "./Contact.scss";
import img from "../../assets/images/contact/Union.png"
import { memo } from "react";
const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="container ">
                    <div className="contact__wrapper">
                        <div className="contact__info-box">
                            <h1>Get in touch</h1>
                            <p>contact@e-comm.ng</p>
                            <p>+234 4556 6665 34</p>
                            <p>20 Prince Hakerem Lekki <br />
                                Phase 1, Lagos.</p>
                            <div className="contact__img-box">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <form className="contact__form">
                            <div>
                                <label htmlFor="full-name">Fullname</label>
                                <input id="full-name" type="text" placeholder="James Doe" />
                            </div>
                            <div>
                                <label htmlFor="full-name">Email</label>
                                <input id="full-name" type="Email" placeholder="jamesdoe@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="full-name">Message</label>
                                <textarea id="full-name" type="text" placeholder="Type your message" />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                    <form className="contact__search-form">
                        <input type="text" placeholder="Search query..." id="" />
                        <button type="button">Search</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default memo(Contact)