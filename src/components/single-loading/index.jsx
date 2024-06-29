import "./SingleLoading.scss"
import "../product-loading/ProductLoading.scss"
const SingleLoading = () => {
    return (
        <>
            <section className="single-loading">
                <div className="single-loading__wrapper">
                    <div className="single-loading__img-box loading loading-animation">
                    </div>
                    <div className="single-loading__img-box loading">
                        <div className=" loading-animation"></div>
                        <div className=" loading-animation"></div>
                        <div className=" loading-animation"></div>
                        <div className=" loading-animation"></div>
                        <div className=" loading-animation"></div>
                        <div className=" loading-animation"></div>
                    </div>
                    <div className="single-loading__img-box loading loading-animation">
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleLoading