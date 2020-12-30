
let carts = document.querySelectorAll(".add-cart");
let products = [
    {
        "_id": {
          "$oid": "5fe9f1ae153a874c393a721d"
        },
        "name": "Cold brew truyền thống",
        "image": "coldbrewtruyenthong.jpg",
        "description": "coldbrewtruyenthong",
        "price": 45000,
        "category_id": {
          "$oid": "5fb1f5584555c7062965fc6a"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a721e"
        },
        "name": "Cold brew cam vàng",
        "image": "coldbrewcamvang.jpg",
        "description": "coldbrewcamvang",
        "price": 50000,
        "category_id": {
          "$oid": "5fb1f5584555c7062965fc6a"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a721f"
        },
        "name": "Cold brew sữa tươi Macchiato",
        "image": "coldbrewsuatuoimacchiato.jpg",
        "description": "coldbrewsuatuoimacchiato",
        "price": 50000,
        "category_id": {
          "$oid": "5fb1f5584555c7062965fc6a"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7220"
        },
        "name": "Cold brew phúc bồn tử",
        "image": "coldbrewphucbontu.jpg",
        "description": "coldbrewphucbontu",
        "price": 50000,
        "category_id": {
          "$oid": "5fb1f5584555c7062965fc6a"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7221"
        },
        "name": "Cold brew sữa tươi",
        "image": "coldbrewsuatuoi.jpg",
        "description": "coldbrewsuatuoi",
        "price": 50000,
        "category_id": {
          "$oid": "5fb1f5584555c7062965fc6a"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7222"
        },
        "name": "Socola đá",
        "image": "socolada.jpg",
        "description": "socolada",
        "price": 55000,
        "category_id": {
          "$oid": "5fe9e390153a874c393a71f4"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7223"
        },
        "name": "Socola đá xay",
        "image": "socoladaxay.jpg",
        "description": "socoladaxay",
        "price": 59000,
        "category_id": {
          "$oid": "5fe9e390153a874c393a71f4"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7224"
        },
        "name": "Matcha đá xay",
        "image": "matchadaxay.jpg",
        "description": "matchadaxay",
        "price": 59000,
        "category_id": {
          "$oid": "5fe9e390153a874c393a71f4"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7225"
        },
        "name": "Matcha latte",
        "image": "matchalatte.jpg",
        "description": "matchalatte",
        "price": 59000,
        "category_id": {
          "$oid": "5fe9e390153a874c393a71f4"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7226"
        },
        "name": "Americano",
        "image": "americano.jpg",
        "description": "americano",
        "price": 39000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7227"
        },
        "name": "Cappucchino",
        "image": "cappuchino.jpg",
        "description": "cappucchino",
        "price": 45000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7228"
        },
        "name": "Caramel Macchiato",
        "image": "caramelmacchiato.jpg",
        "description": "caramelmacchiato",
        "price": 55000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a7229"
        },
        "name": "Espresso",
        "image": "espresso.jpg",
        "description": "espresso",
        "price": 35000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a722a"
        },
        "name": "Latte",
        "image": "latte.jpg",
        "description": "latte",
        "price": 45000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      },{
        "_id": {
          "$oid": "5fe9f1ae153a874c393a722b"
        },
        "name": "Mocha",
        "image": "mocha.jpg",
        "description": "mocha",
        "price": 49000,
        "category_id": {
          "$oid": "5fb1f51e4555c7062965fc5c"
        }
      }
    ];

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
        if(cartItems[product.description] == undefined){
            cartItems = {
                ...cartItems,
                [product.description] : product
            }
        }
        cartItems[product.description].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.description] : product
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
                <img src="./img/gallery/${item.description}.jpg" class="cart-img">
                <span class="product-name">${item.name}</span>
            </div>
            <div class ="price">${item.price},000 Đ</div>
            <div class ="quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class ="total">
                ${item.inCart * item.price}Đ
            </div>
            `;
        })
        productContainer.innerHTML += `
        <div class ="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Tổng
            </h4>
            <h4 class="basketTotalTitle">
                ${cartCost} Đồng
            </h4>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();