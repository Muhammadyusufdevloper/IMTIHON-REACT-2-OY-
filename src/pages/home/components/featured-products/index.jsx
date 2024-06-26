import { IoMdStar } from "react-icons/io"
import { useGetProductsQuery } from "../../../../context/api/product-api"
import "./FeaturedProducts.scss"
const FeaturedProducts = () => {
    const { data } = useGetProductsQuery({ limit: 3 })
    const product = data?.map((product) => (
        <div className="featured-products__card" key={product.id}>
            <div className="featured-products__images-boxes">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="featured-products__info-box">
                <h3 className="featured-products__card-title">{product.title}</h3>
                <div className="featured-products__star-card">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                </div>
                <div className="featured-products__price-card">
                    <p className="featured-products__price-text">${product.price}</p>
                    <p className="featured-products__old-price-text">${product.price + (product.price * 0.24)}</p>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <section className="featured-products">
                <div className="container">
                    <h2 className="featured-products__title">FEATURED PRODUCTS</h2>
                    <div className="featured-products__cards">
                        {product}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts