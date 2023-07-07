//cargar DOM
document.addEventListener('DOMContentLoaded',() => {

    async function init() {
        const url = 'https://fakestoreapi.com/products'
      
        try {
            const result = await fetch(url)
            const products = await result.json(); 

            render(products);

        } catch (error) {
            console.log(error)
            
        }
  }
  init()
  })

// llamar productos del array con createElement 
function render(products) {

  const ul = document.createElement("ul");
  ul.classList.add("products");


//referencia para imprimir productos en html
  const app = document.querySelector(".app");
  app.appendChild(ul);

//escuchar evento de click con toggle y usar las clases del corazon vacio y lleno  
  app.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.closest(".product__like")) {
      e.target.classList.toggle("icon-heart");
      e.target.classList.toggle("icon-heart-empty");
    }
  });

  //traer desde el array cada uno de los productos con un forEach para imprimirlos en el html
  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("product");

    const divProductImageContainer = document.createElement("div");
    divProductImageContainer.classList.add("product__image-container");

    const imgProductImage = document.createElement("img");
    imgProductImage.classList.add("product__image");
    imgProductImage.src = product.image;
    imgProductImage.alt = product.title;

    const divProductContent = document.createElement("div");
    divProductContent.classList.add("product__content");

    const header = document.createElement("header");
    header.classList.add("product__header");

    const h6 = document.createElement("h6");
    h6.classList.add("product__category");
    h6.innerText = product.category;

    const h2 = document.createElement("h2");
    h2.classList.add("product__title");
    h2.innerText = product.title;

    const price = document.createElement("p");
    price.classList.add("product__price");
    price.innerText = product.price;

    const description = document.createElement("p");
    description.classList.add("product__description");
    description.innerText = product.description;

    const footer = document.createElement("footer");
    footer.classList.add("product__footer");

    const aLike = document.createElement("a");
    aLike.href = "#";
    aLike.dataset.id = product.id;
    aLike.classList.add("product__like");

    const iconHeart = document.createElement("i");
    iconHeart.classList.add("icon-heart-empty");

    const addToCart = document.createElement("a");
    addToCart.classList.add("product__add-to-cart");
    addToCart.innerText = "Add to Cart";


//imprimir eachProduct creados segun su clase
    ul.appendChild(li);
    li.appendChild(divProductImageContainer);
    divProductImageContainer.appendChild(imgProductImage);

    li.appendChild(divProductContent);
    divProductContent.appendChild(header);
    header
      .appendChild(h6)
      .appendChild(h2)
      .appendChild(price)
      .appendChild(description);
    divProductContent.appendChild(footer);

    footer.appendChild(aLike);
    aLike.appendChild(iconHeart);
    footer.appendChild(addToCart);
  });
}






  
  


