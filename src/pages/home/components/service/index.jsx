import shippingImg from "../../../../assets/images/service/shipping.png"
import refoundImg from "../../../../assets/images/service/refund.png"
import supportImg from "../../../../assets/images/service/support.png"
import "./Service.scss"
const Service = () => {
  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service__cards">
            <div className="service__card">
                <img className="service__card-img" src={shippingImg} alt="Shipping img" />
                <h3 className="service__card-title">FREE SHIPPING</h3>
                <p className="service__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, tenetur?</p>
            </div>
            <div className="service__card">
                <img className="service__card-img" src={refoundImg} alt="Refound img" />
                <h3 className="service__card-title">100% REFUND</h3>
                <p className="service__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, tenetur?</p>
            </div>
            <div className="service__card">
                <img className="service__card-img" src={supportImg} alt="Support img" />
                <h3 className="service__card-title">SUPPORT 24/7</h3>
                <p className="service__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, tenetur?</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service