
let carts = document.querySelectorAll(".add-cart");
let a = document.querySelectorAll("#productA");
var products =[];
console.log(a)
a.forEach(element => {
    products.push(element.innerHTML);
});
console.log(products);

// async function getData() {
//     let response = await fetch('data.json');
//     let data = await response.json();
//     console.log(data);
// }
// getData();

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers = parseInt(localStorage.getItem('cartNumbers'));
    if (productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    console.log(cartItems);
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    
    if(cartItems && productContainer){
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class ="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./img/gallery/${item.tag}.jpg" class="cart-img">
                <span class="product-name">${item.name}</span>
            </div>
            <div class ="price">${item.price},000 Đ</div>
            <div class ="quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class ="total">
                ${item.inCart * item.price},000 Đ
            </div>
            `;
        })
        productContainer.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Tổng
            </h4>
            <h4 class="basketTotalTitle">
                ${cartCost},000 Đồng
            </h4>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();