import { useState, useEffect } from "react";
import logo from "../../assets/images/footer/logo.svg";
import facebook from "../../assets/images/footer/facebook.png";
import twitter from "../../assets/images/footer/twitter.png";
import brands from "../../assets/images/footer/Paypal.png";
import Western from "../../assets/images/footer/Western-union.png";
import Group from "../../assets/images/footer/Group 19.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);
    const [openTopSection, setOpenTopSection] = useState('logo');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const toggleTopSection = (section) => {
        setOpenTopSection(openTopSection === section ? null : section);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 800);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="container footer__wrapper">
                <div className="footer__top">
                    <div className={`footer__top__row ${isMobile && openTopSection === 'logo' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleTopSection('logo')} className="footer__logo-wrapper" >
                            <img src={logo} alt="" />
                            <h1 className="footer__logo-title">E-COMMERCE</h1>
                        </h3>
                        {(!isMobile || openTopSection === 'logo') && (
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer.
                            </p>
                        )}
                    </div>
                    <div className={`footer__top__row ${isMobile && openTopSection === 'follow' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleTopSection('follow')}>Follow Us</h3>
                        {(!isMobile || openTopSection === 'follow') && (
                            <>
                                <p>
                                    Since the 1500s, when an unknown printer took a galley of type and scrambled.
                                </p>
                                <div>
                                    <img src={facebook} alt="" />
                                    <img src={twitter} alt="" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className={`footer__top__row ${isMobile && openTopSection === 'contact' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleTopSection('contact')}>Contact Us</h3>
                        {(!isMobile || openTopSection === 'contact') && (
                            <p>E-Comm, 4578 Marmora Road, Glasgow D04 89GR</p>
                        )}
                    </div>
                </div>
                <div className="footer__mid">
                    <div className={`footer__mid__list ${isMobile && openSection === 'information' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleSection('information')}>Information</h3>
                        {(!isMobile || openSection === 'information') && (
                            <ul>
                                <li className="footer__mid__item"><Link to="/about-us">About Us</Link></li>
                                <li className="footer__mid__item"><Link to="/information">Information</Link></li>
                                <li className="footer__mid__item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                                <li className="footer__mid__item"><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={`footer__mid__list ${isMobile && openSection === 'service' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleSection('service')}>Service</h3>
                        {(!isMobile || openSection === 'service') && (
                            <ul>
                                <li className="footer__mid__item"><Link to="/service">Service</Link></li>
                                <li className="footer__mid__item"><Link to="/support">Support</Link></li>
                                <li className="footer__mid__item"><Link to="/faq">FAQ</Link></li>
                                <li className="footer__mid__item"><Link to="/contact">Contact</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={`footer__mid__list ${isMobile && openSection === 'account' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleSection('account')}>My Account</h3>
                        {(!isMobile || openSection === 'account') && (
                            <ul>
                                <li className="footer__mid__item"><Link to="/my-account">My Account</Link></li>
                                <li className="footer__mid__item"><Link to="/orders">Orders</Link></li>
                                <li className="footer__mid__item"><Link to="/wishlist">Wishlist</Link></li>
                                <li className="footer__mid__item"><Link to="/settings">Settings</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={`footer__mid__list ${isMobile && openSection === 'offers' ? 'open' : ''}`}>
                        <h3 onClick={() => toggleSection('offers')}>Our Offers</h3>
                        {(!isMobile || openSection === 'offers') && (
                            <ul>
                                <li className="footer__mid__item"><Link to="/offers">Offers</Link></li>
                                <li className="footer__mid__item"><Link to="/deals">Deals</Link></li>
                                <li className="footer__mid__item"><Link to="/coupons">Coupons</Link></li>
                                <li className="footer__mid__item"><Link to="/sales">Sales</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="footer__bot">
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    <div className="footer__bottom-card">
                        <img src={brands} alt="" />
                        <img src={Western} alt="" />
                        <img src={Group} alt="" />
                        <img src={brands} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
