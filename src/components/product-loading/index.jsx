import "./ProductLoading.scss"

const ProductLoading = ({ count }) => {

    const renderLoadingCards = () => {
        let cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(
                <div className='product-loading__card' key={i}>
                    <div className='product-loading__image-box loading-animation'></div>
                    <div className='product-loading__info-box'>
                        <div className='loading-animation'></div>
                        <div className='loading-animation'></div>
                        <div className='loading-animation'></div>
                    </div>
                </div>
            );
        }
        return cards;
    };

    return (
        <section className='product-loading'>
            <div className='product-loading__cards'>
                {renderLoadingCards()}
            </div>
        </section>
    );
}

export default ProductLoading;
