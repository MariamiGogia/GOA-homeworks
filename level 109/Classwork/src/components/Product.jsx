const Product = ({ productInfo }) => {
    return (
        <div style={{border: "1px solid black"}}>
            <img src={productInfo.image} alt="product" style={{width: 130}} />
            <h1>{productInfo.title}</h1>
            <p>{productInfo.category}</p>
            <p>{productInfo.price}$</p>
            <button>Add To Cart!</button>
        </div>
    );
};


export default Product;