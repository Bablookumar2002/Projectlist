import { products } from "./products.js";
import { createProductCart } from "./createProductCart.js";
import {findProductInCart}  from"./utils.js";
let productContainer=document.getElementById("products");
let cart=JSON.parse(localStorage.getItem("cart")) || [];
let filterContainer=document.querySelector(".side-bar");

// for(let product of products)
//     {
//         const cardContainer=document.createElement("div");
//         cardContainer.classList.add(
//         "card",
//         "card_vrtical",
//         "d-flex",
//         "direction-column",
//         "relative",
//         "shadow"
//         );
//         // image conatiner
//         const imageContainer=document.createElement("div");
//         imageContainer.classList.add("card-image-container");
//         const image=document.createElement("img");
//         image.classList.add("card-image");
//         image.setAttribute("src",product.img);
//         image.setAttribute("alt",product.name);
//         imageContainer.appendChild(image);

//         //card_deatils container
//         const cardDetailsContainer=document.createElement("div");
//         cardDetailsContainer.classList.add("card_details");

//         const brandContainer=document.createElement("div");
//         brandContainer.classList.add("card-title","myclass2");
//         brandContainer.innerText=product.brand;
//         cardDetailsContainer.appendChild(brandContainer);

//         const descriptionContainer=document.createElement("div");
//         descriptionContainer.classList.add("card-description","myclass2");
//         cardDetailsContainer.appendChild(descriptionContainer);

//         const name=document.createElement("p");
//         name.classList.add("card-des");
//         name.innerText=product.name;
//         descriptionContainer.appendChild(name);

//         const price=document.createElement("p");
//         price.classList.add("card-price","d-flex","align-end","gap-sm");
//         price.innerText=`Rs ${product.newPrice}`;

//         const oldPrice=document.createElement("p");
//         oldPrice.classList.add("price-strike-through");
//         oldPrice.innerText=`Rs ${product.oldPrice}`;
//         price.appendChild(oldPrice);

//         const discount=document.createElement("p");
//         discount.classList.add("discount");
//         discount.innerText=`${product.discount}%`;
//         price.appendChild(discount);

//         descriptionContainer.appendChild(price);

//         //rating container

//         const ratings=document.createElement("p");
//         ratings.classList.add("d-flex", "align-centre");

//         const rating=document.createElement("span");
//         rating.innerText=product.rating;
//         ratings.appendChild(rating);
//         const star=document.createElement("span");
//         star.classList.add("material-icons-outlined","star");
//         star.innerText="star";
//         ratings.appendChild(star);
//         descriptionContainer.appendChild(ratings);

//         //cta-btn
//         let ctaButton=document.createElement("div");
//         ctaButton.classList.add("cta-btn");

//         let cartButton=document.createElement("button");
//         cartButton.classList.add(
//             "button", 
//             "btn-primary", 
//             "btn-icon", 
//             "cart-btn", 
//             "d-flex", 
//             "align-center", 
//             "justify-center", 
//             "gap", 
//             "cursor",
//             "btn-margin"
//             );
//            cartButton.setAttribute("data-id",product._id);
//             let cart=document.createElement("span");
//             cart.classList.add("material-icons-outlined");
//             cart.innerText="shopping_cart";
//             cartButton.appendChild(cart);

//             let buttonText=document.createElement("span");
//             buttonText.innerText="Add To cart";
//             cartButton.appendChild(buttonText);
            
//             ctaButton.appendChild(cartButton);
        
//         cardDetailsContainer.appendChild(ctaButton);
            
//         cardContainer.appendChild(imageContainer);
//         cardContainer.appendChild(cardDetailsContainer);
//         productContainer.appendChild(cardContainer);

//     }
    productContainer.addEventListener("click",(event)=>{
        const isProductInCart=findProductInCart(cart,event.target.dataset.id);
        if(!isProductInCart)
        {
                const productAddToCart=products.filter(
                    ({_id})=>_id===event.target.dataset.id
                );
                cart=[...cart,...productAddToCart];
                localStorage.setItem("cart",JSON.stringify(cart));
                const cartButton=event.target;
                cartButton.innerHTML="Go to Cart <span class='material-icons-outlined'></span> ";
        }
        else{
            location.href="cart.html";
        }
        
        console.log(cart);
    });


    let currentFilters = {
        rating: null,
        discount: null,
        newPrice:null,
        idealFor:null
    };
    
    
    filterContainer.addEventListener("click", (event) => {
        if (event.target.dataset.rating) {
            currentFilters.rating = Number(event.target.dataset.rating);
        }
    
        if (event.target.dataset.discount) {
            currentFilters.discount = Number(event.target.dataset.discount);
        }
    
        if (event.target.dataset.newprice) {
            currentFilters.newPrice = Number(event.target.dataset.newprice); // Use 'newprice' instead of 'newPrice'
        }

        if (event.target.dataset.idealfor) {
            currentFilters.idealFor = Number(event.target.dataset.idealfor); // Use 'newprice' instead of 'newPrice'
        }
    
        console.log(currentFilters); // Debugging: Log currentFilters object
    
        let updatedProducts = products;
    
        if (currentFilters.rating !== null) {
            updatedProducts = updatedProducts.filter(
                ({ rating }) => rating >= currentFilters.rating
            );
        }
    
        if (currentFilters.discount !== null) {
            updatedProducts = updatedProducts.filter(
                ({ discount }) => discount >= currentFilters.discount
            );
        }
    
        if (currentFilters.newPrice !== null && currentFilters.newPrice === 1) {
            updatedProducts = updatedProducts.sort((a, b) => a.newPrice - b.newPrice);
        }
        if (currentFilters.newPrice !== null && currentFilters.newPrice === 2) {
            updatedProducts = updatedProducts.sort((a, b) => b.newPrice - a.newPrice);
        }

        if (currentFilters.idealFor !== null) {
            if (currentFilters.idealFor === 1) {
                updatedProducts = updatedProducts.filter(
                    ({ idealFor }) => idealFor === "men"
                );
            } else if (currentFilters.idealFor === 2) {
                updatedProducts = updatedProducts.filter(
                    ({ idealFor }) => idealFor === "women"
                );
            } else if (currentFilters.idealFor === 3) {  // Assuming 3 represents "unisex"
                updatedProducts = updatedProducts.filter(
                    ({ idealFor }) => idealFor === "unisex"
                );
            }
        }
        //console.log(updatedProducts);
        productContainer.innerHTML = "";
        createProductCart(updatedProducts, productContainer, findProductInCart, "products");
    });
    
    

    createProductCart(products,productContainer,findProductInCart,"products");

    
