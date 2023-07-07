import Product from "./Product.jsx";

function Products({ data, likesClickHandler}) {

    return <ul className="products">
       {data.map(product => <Product 
                            key={product.id} 
                            product={product}
                            likesClickHandler={likesClickHandler} />)}
    </ul>
    
} 

export default Products