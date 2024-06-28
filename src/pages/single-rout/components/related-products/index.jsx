import { memo } from "react"
import ProductLoading from "../../../../components/product-loading"
import Product from "../../../../components/products"
import { useGetProductsQuery } from "../../../../context/api/product-api"
import "./RelatedProduct.scss"
const RelatedProduct = () => {
    const { data, isLoading } = useGetProductsQuery({ limit: 4 })
    return (
        <>
            <div className="related-product">
                <div className="container">
                    <h1 className="related-product__title">RELATED PRODUCTS</h1>
                    {
                        isLoading ?
                            <ProductLoading count={4} />
                            :
                            <Product products={data} isSingle={true} />
                    }
                </div>
            </div>
        </>
    )
}

export default memo(RelatedProduct)