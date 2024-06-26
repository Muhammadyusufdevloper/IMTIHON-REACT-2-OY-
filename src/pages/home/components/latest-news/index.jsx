import "./LatestNews.scss"
import new1 from "../../../../assets/images/latest-news/Nike-logo.png";
import new2 from "../../../../assets/images/latest-news/figma-logo.png";
import new3 from "../../../../assets/images/latest-news/kronos-logo.png";
const LatestNews = () => {
    return (
        <>
            <div className="latest-news container">
                <h2 className="latest-news__title">LATEST NEWS</h2>
                <div className="latest-news__cards">
                    <div className="latest-news__card">
                        <div className="latest-news__img">
                            <img src={new1} alt="" />
                        </div>
                        <div className="latest-news__info">
                            <span>01 Jan, 2015</span>
                            <h3 className="latest-news__name">Fashion Industry</h3>
                            <p className="latest-news__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__img">
                            <img src={new2} alt="" />
                        </div>
                        <div className="latest-news__info">
                            <span>01 Jan, 2015</span>
                            <h3 className="latest-news__name">Best Design Tools</h3>
                            <p className="latest-news__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </div>
                    <div className="latest-news__card">
                        <div className="latest-news__img">
                            <img src={new3} alt="" />
                        </div>
                        <div className="latest-news__info">
                            <span>01 Jan, 2015</span>
                            <h3 className="latest-news__name">HR Community</h3>
                            <p className="latest-news__desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestNews