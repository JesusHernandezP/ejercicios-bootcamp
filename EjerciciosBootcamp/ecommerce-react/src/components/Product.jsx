import { useState } from 'react'
import '../assets/css/products.css'

function Product({ product, likesClickHandler }) {
    const {id, image, title, category, price, description } = product
    const [like, setLike] = useState(false)
    

    const likeClickHandler = (e) => {
        e.preventDefault()
        setLike(!like)
        likesClickHandler(id)
    }
    
    return  <li className="product">
        <div className="product__image-container">
          <img src={image} alt={title}className="product__image" />
        </div>
        <div className="product__content">
          <header className="product__header">
            <h6 className="product__category">{category}</h6>
            <h2 className="product__title">{title}</h2>
            <p className="product__price">${price}</p>
            <p className="product__description">{description}</p>
          </header>
          <footer className="product__footer">
            <a href="/#" data-id="1" className="product__like" onClick={likeClickHandler}><i className={like ? 'icon-heart' : "icon-heart-empty"}></i></a>
            <a href="/#" className="product__add-to-cart">Add to Cart</a>
          </footer>
        </div>
      </li>
    
} 

export default Product