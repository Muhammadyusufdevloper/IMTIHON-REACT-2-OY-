import { useState, useEffect } from 'react'
import { useGetCategoryQuery, useGetProductsCategoryQuery } from '../../../../context/api/product-api'
import Product from "../../../../components/products"
import "./BestSeller.scss"

const BestSeller = () => {
    let limit = `?limit=${8}`
    const [selectedCategory, setSelectedCategory] = useState("all")
    const { data: categories } = useGetCategoryQuery()
    const categoryData = selectedCategory === "all" ? "" : `/category/${selectedCategory}`
    const { data: products } = useGetProductsCategoryQuery({ category: categoryData, limit })
    console.log(products);

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
                <Product products={products} />
            </div>
        </section>
    )
}

export default BestSeller

