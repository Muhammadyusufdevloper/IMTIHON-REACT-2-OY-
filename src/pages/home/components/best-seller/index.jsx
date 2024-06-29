import { useState, useEffect, memo } from 'react'
import { useGetCategoryQuery, useGetProductsCategoryQuery } from '../../../../context/api/product-api'
import Product from "../../../../components/products"
import "./BestSeller.scss"
import ProductLoading from '../../../../components/product-loading'
let limit = 8
const BestSeller = () => {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const { data: categories } = useGetCategoryQuery()
    const [limitCunt, setLimitCount] = useState(1)
    const categoryData = selectedCategory === "all" ? "" : `/category/${selectedCategory}`
    const { data: products, isLoading, isError } = useGetProductsCategoryQuery({
        category: categoryData,
        limit: limit * limitCunt,
    })

    useEffect(() => {
        console.log(`Selected category: ${selectedCategory}`)
    }, [selectedCategory])

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const categoryList = categories?.map((category) => (
        <li
            key={category}
            className={`best-seller__categories-item ${selectedCategory === category ? 'best-seller__selected' : ''}`}
            onClick={() => handleCategoryClick(category)}
        >
            <data value={category}>{category.slice(0, 1).toUpperCase() + category.slice(1).toLowerCase()}</data>
        </li>
    ))
    return (
        <section className='best-seller'>
            <div className='container best-seller__wrapper'>
                <h1 className='best-seller__title'>BEST SELLER</h1>
                <div className='best-seller__categories'>
                    <ul className='best-seller__categories-list'>
                        <li
                            className={`best-seller__categories-item ${selectedCategory === "all" ? 'best-seller__selected' : ''}`}
                            onClick={() => handleCategoryClick("all")}
                        >
                            <data value="all">All</data>
                        </li>
                        {categoryList}
                    </ul>
                </div>
                {
                    isLoading || isError ?
                        <ProductLoading count={8} />
                        :
                        <Product products={products} isSingle={true} />
                }
                <button disabled={isLoading} onClick={() => setLimitCount(p => p + 1)} className='best-seller__learn-more'>LOAD MORE</button>
            </div>
        </section>
    )
}

export default memo(BestSeller)

