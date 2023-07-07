// export default function like(icon_heart_empty, icon_heart) {
//     const d = document;

//     d.addEventListener("click", e => {
//         if (e.target.matches(icon_heart_empty)) {
//             d.querySelector(icon_heart).classList.toggle("icon_heart")
//         }
            
        
//     })



    
// }

// DOMReady
// window.addEventListener('DOMContentLoaded',() => {
    
//     async function init() {
//         //ir a buscar a la API los productos
//         //Enviar los productos a la funcion render
//         const products = await getProducts()
//         render(products)
//     }
//     //la funcion de la delegacion de eventos
//     async function getProducts() {
//         try {
//             const response = await fetch('https://fakestoreapi.com/products')
//             return await response.json()
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     function render(products) {
//         console.log(products)
//     }
//     // Ejecutar las funciones iniciales
//     init()
//   })
  
  
  
  // document.getElementsByClassName("icon-heart-empty").addEventListener("icon-heart", myFunction);
  
  // function myFunction() {
  //   document.getElementsByClassName("icon-heart-empty").innerHTML = "icon-heart";
  // }
  
  
  // import like from "./main-dev2.js"
  
  // window.addEventListener('DOMContentLoaded', e=> { 
    
  //   like("icon-heart-empty", "icon-heart" );
  
  // })
  
  
  
  
  // alert("Estas seguro de entrar?")
  
  // let texto = " bienvenidos a este intento de pagina web"
  // const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
  // hablar(texto);
  

  // const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  // const app = document.querySelectorAll('.app')

  // const ul = document.createElement('ul')
  // ul.classList.add(products)

  document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelectorAll('#app')

    async function traerProductos() {
        const url = 'https://fakestoreapi.com/products'
      
        try {
            const resultado = await fetch(url)
            const respuesta = await resultado.json(); 

            pintarProductos(respuesta);

        } catch (error) {
            console.log(error)
            
        }
    }
      

//     function pintarProductos(productos) {
//     console.log(productos);
//     productos.forEach((prod) => {
//         const {id, title, price, category, description, image, html } = prod
//         app.innerHTML +=  `
        
//           <div class="product__imageContainer">
//             <img src="${image}" alt="" class="product__image" />
//           </div>
//           <div class="product__content">
//             <header class="product__header">
//               <h6 class="product__category">${category}</h6>
//               <h2 class="product__title">${title}</h2>
//               <p class="product__price">${price}</p>
//               <p class="product__description">${description}</p>
//             </header>
//             <footer class="product__footer">
//               <a href="#" data-id="${id}" class="product__like"><i class="icon_heart_empty icon_heart"></i></a>
//               <a href="#" class="product__add-to-cart">Add to Cart</a>
//             </footer>
//           </div>
       
      
//        `
        
//     })
//   }
  

// function newrender(products){
//     const ul = document.createElement("ul");
//     ul.classList.add("products");
    
//     const app = document.querySelector(".app");
//     app.appendChild(ul);
//     app.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (e.target.closest(".product__like")) {
//         e.target.classList.toggle("icon-heart");
//         e.target.classList.toggle("icon-heart-empty");
//       }
//     });
    
  
//     products.forEach((product) => {
//       const li = document.createElement("li");
//       li.classList.add("product");
      
//       const divProductImageContainer = document.createElement("div");
//       divProductImageContainer.classList.add("product__image-container");
      
//       const imgProductImage = document.createElement("img");
//       imgProductImage.classList.add("product__image");
//       imgProductImage.src = product.image;
//       imgProductImage.alt = product.title;
      
//       const divProductContent = document.createElement("div");
//       divProductContent.classList.add("product__content");
      
//       const header = document.createElement("header");
//       header.classList.add("product__header");
      
//       const h6 = document.createElement("h6");
//       h6.classList.add("product__category");
//       h6.innerText = product.category;
      
//       const h2 = document.createElement("h2");
//       h2.classList.add("product__title");
//       h2.innerText = product.title;
      
//       const price = document.createElement("p");
//       price.classList.add("product__price");
//       price.innerText = product.price;

//       const description = document.createElement("p");
//       description.classList.add("product__description");
//       description.innerText = product.description;
      
//       const footer = document.createElement("footer");
//       footer.classList.add("product__footer");
      
//       const aLike = document.createElement("a");
//       aLike.href = "#";
//       aLike.dataset.id = product.id;
//       aLike.classList.add("product__like");
      
//       const iconHeart = document.createElement("i");
//       iconHeart.classList.add("icon-heart-empty");
      
//       const addToCart = document.createElement("a");
//       addToCart.classList.add("product__add-to-cart");
//       addToCart.innerText = "Add to Cart";
      
//       ul.appendChild(li);
//       li.appendChild(divProductImageContainer);
//       divProductImageContainer.appendChild(imgProductImage);
      
//       li.appendChild(divProductContent);
//       divProductContent.appendChild(header);
//       header
//       .appendChild(h6)
//       .appendChild(h2)
//       .appendChild(price)
//       .appendChild(description);
//       divProductContent.appendChild(footer);
      
//       footer.appendChild(aLike);
//       aLike.appendChild(iconHeart);
//       footer.appendChild(addToCart);
//     });
//   }

//   const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// const app = document.querySelector('.app')


// const ul = document.createElement('ul')
// ul.classList.add('products')

//   products.forEach(product => {
//     const li = document.createElement("li");
//     li.classList.add("product");

//     ul.appendChild(li);

    
//     const divProductImageContainer = document.createElement("div");
//     divProductImageContainer.classList.add("product__image-container");

//     li.appendChild(divProductImageContainer);
//     divProductImageContainer.appendChild(imgProductImage);




//   });

//   app.appendChild(ul)


    
  //   const imgProductImage = document.createElement("img");
  //   imgProductImage.classList.add("product__image");
  //   imgProductImage.src = product.image;
  //   imgProductImage.alt = product.title;
    
  //   const divProductContent = document.createElement("div");
  //   divProductContent.classList.add("product__content");
    
  //   const header = document.createElement("header");
  //   header.classList.add("product__header");
    
  //   const h6 = document.createElement("h6");
  //   h6.classList.add("product__category");
  //   h6.innerText = product.category;
    
  //   const h2 = document.createElement("h2");
  //   h2.classList.add("product__title");
  //   h2.innerText = product.title;
    
  //   const price = document.createElement("p");
  //   price.classList.add("product__price");
  //   price.innerText = product.price;

  //   const description = document.createElement("p");
  //   description.classList.add("product__description");
  //   description.innerText = product.description;
    
  //   const footer = document.createElement("footer");
  //   footer.classList.add("product__footer");
    
  //   const aLike = document.createElement("a");
  //   aLike.href = "#";
  //   aLike.dataset.id = product.id;
  //   aLike.classList.add("product__like");
    
  //   const iconHeart = document.createElement("i");
  //   iconHeart.classList.add("icon-heart-empty");
    
  //   const addToCart = document.createElement("a");
  //   addToCart.classList.add("product__add-to-cart");
  //   addToCart.innerText = "Add to Cart";
    
    

    
    
  //   li.appendChild(divProductContent);
  //   divProductContent.appendChild(header);
  //   header
  //   .appendChild(h6)
  //   .appendChild(h2)
  //   .appendChild(price)
  //   .appendChild(description);
  //   divProductContent.appendChild(footer);
    
  //   footer.appendChild(aLike);
  //   aLike.appendChild(iconHeart);
  //   footer.appendChild(addToCart);


  // DOMReady
// window.addEventListener('DOMContentLoaded',() => {
  
//   async function init() {
    
//     const products = await getProducts()
//     render(products)
//   }
  
//   async function getProducts() {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products')
//       return await response.json()
//     } catch (error) {
//       console.error(error)
//     }
//   }
//   function render(products) {
//     console.log(products)
//   }
  
//   init()
// })


// -----------------------------------------------
// function render(products) {
//   Products.forEach((product) => {
//             const {id, title, price, category, description, image } = product
//             app.innerHTML +=  `
      
//             <div class="product__imageContainer">
//             <img src="${image}" alt="" class="product__image" />
//             </div>
//             <div class="product__content">
//             <header class="product__header">
//             <h6 class="product__category">${category}</h6>
//             <h2 class="product__title">${title}</h2>
//             <p class="product__price">${price}</p>
//             <p class="product__description">${description}</p>
//             </header>
//             <footer class="product__footer">
//             <a href="#" data-id="${id}" class="product__like"><i class="icon_heart_empty icon_heart"></i></a>
//             <a href="#" class="product__add-to-cart">Add to Cart</a>
//             </footer>
//             </div>
//             `
//             })
//           }
//           init()
//           })