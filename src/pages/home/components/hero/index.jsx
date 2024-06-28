import { memo } from "react";
import "./Hero.scss";
const Hero = () => {
  let hours = new Date().getHours()
  let min = new Date().getMinutes()
  let sec = new Date().getSeconds()
  return (
    <>
      <section className="hero">
        <div className="container hero__wrapper">
          <h1 className="hero__title">Super Flash Sale 50% Off</h1>
          <div className="hero__card">
            <div>
              {hours.toString().length === 2 ? hours : `0${hours}`}
            </div>
            <p>
              :
            </p>
            <div>
              {min.toString().length === 2 ? min : `0${min}`}
            </div>
            <p>
              :
            </p>
            <div>
              {sec.toString().length === 2 ? sec : `0${sec}`}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Hero)