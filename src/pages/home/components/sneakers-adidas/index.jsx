import { Link } from "react-router-dom"
import "./SneakersAdidas.scss"
import img from "../../../../assets/images/sneakers/shoes-sneakers.png"
const SneakersAdidas = () => {
  return (
    <>
      <section className="sneakers-adidas">
        <div className="sneakers-adidas__wrapper container">
          <div className="sneakers-adidas__left">
            <h2 className="sneakers-adidas__left__title">Adidas Men Running Sneakers</h2>
            <p className="sneakers-adidas__left__text">
              Performance and design. Taken right to the edge.
            </p>
            <Link className="sneakers-adidas__left__btn">SHOP NOW</Link>
          </div>
          <div className="sneakers-adidas__right">
            <img src={img} alt="sneakers-adidas img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default SneakersAdidas