import { useEffect, useState } from "react";
import Details from "./components/Details";
import Products from "./components/Products";


function App() {
  const [products, setProducts] = useState([])
  const [likes, setLikes] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const likesClickHandler = (id) => {
    if (likes.includes(id)){
      const new_arr = likes.filter(prod => prod !== id)
      setLikes(new_arr)

    }else{
      setLikes([...likes, id])
    }
           
  }

  return <>
  <div className="app">
      <h1 className="app__title">Trending products</h1>
      <Products data={ products } likesClickHandler={likesClickHandler }/>

      </div> 
      <Details likes={likes.length} />

      </>

  
}

export default App
