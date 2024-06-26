import "./Product.scss"
import reteImg from "../../assets/images/product/rate.svg"
const Product = ({ products }) => {

    const product = products?.map(product => (
        <div key={product.id} className="product__card">
            <div className="product__img-box">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product__info-box">
                <h3 className="product__title">
                    {product.title}
                </h3>
                <img src={reteImg} alt="rete img" />
                <div className="product__price-card">
                    <p className="product__price">${product.price}</p>
                    <p className="product__old-price">${(product.price + (product.price * 0.24)).toFixed(3)}</p>
                    <p className="product__discount">24% Off</p>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <section className='product'>
                <div className=''>
                    <div className='product__cards'>
                        {product}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product