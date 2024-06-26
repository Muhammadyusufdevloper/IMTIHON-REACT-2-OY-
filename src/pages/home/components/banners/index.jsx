import { useGetProductsQuery } from "../../../../context/api/product-api"
import "./Banners.scss"
const Banners = () => {
    const { data } = useGetProductsQuery({ limit: 3 })
    console.log(data);
    const productsCard = data?.map(product => (
        <div className="banners__card" key={product.id}>
            <h3 className="banners__title">{product?.title}</h3>
            <div className="banners__image-box">
                <img src={product?.image} alt={product?.title} />
            </div>
            <div className="banners__price-card">
                <span className="banners__old-price">${product?.price + (product?.price * 0.24)}</span>
                <span className="banners__discount">24% Off</span>
            </div>
            <p className="banners__price">${product?.price }</p>
        </div>
    ))
    return (
        <div className="banners">
            <div className="container ">
                <div className="banners__cards">
                    {productsCard}
                </div>
            </div>
        </div>
    )
}

export default Banners