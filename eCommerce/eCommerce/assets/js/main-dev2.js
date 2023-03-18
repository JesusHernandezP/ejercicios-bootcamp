// export default function like(icon_heart_empty, icon_heart) {
//     const d = document;

//     d.addEventListener("click", e => {
//         if (e.target.matches(icon_heart_empty)) {
//             d.querySelector(icon_heart).classList.toggle("icon_heart")
//         }
            
        
//     })



    
// }

//DOMReady
// window.addEventListener('DOMContentLoaded',() => {
    // hacer el llamado a la API
    // Con los productos recibidos,mostrar el HTML en el div. app
    // delegacion de eventos para el boton de like
    //variables
    //EventListeners
    //funciones
  //   async function init() {
  //       //ir a buscar a la API los productos
  //       //Enviar los productos a la funcion render
  //       const products = await getProducts()
  //       render(products)
  //   }
  //   //la funcion de la delegacion de eventos
  //   async function getProducts() {
  //       try {
  //           const response = await fetch('https://fakestoreapi.com/products')
  //           return await response.json()
  //       } catch (error) {
  //           console.error(error)
  //       }
  //   }
  //   function render(products) {
  //       console.log(products)
  //   }
  //   // Ejecutar las funciones iniciales
  //   init()
  // })
  
  
  
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
  

//   const products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

//   const app = document.querySelectorAll('.app')

//   const ul = document.createElement('ul')
//   ul.classList.add(products)

//   document.addEventListener('DOMContentLoaded', traerProductos)
// const contenedor = document.querySelectorAll('#app')

//     async function traerProductos() {
//         const url = 'https://fakestoreapi.com/products'
      
//         try {
//             const resultado = await fetch(url)
//             const respuesta = await resultado.json(); 

//             pintarProductos(respuesta);

//         } catch (error) {
//             console.log(error)
            
//         }
//     }
      

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
  