let hamburger = document.querySelector(".right-side");

let menu = document.querySelector(".hamburger-material");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show")
})

setTimeout(() => {
    console.log("Hello how are you?")
}, 1000);




const products = [{
    image : "Index/Products/athletic-cotton-socks-6-pairs.jpg",
    name : "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating : {
        stars : 4.5,
        count : 87
    },
    priceCent : 1090
}, {
    image : "Index/Products/intermediate-composite-basketball.jpg",
    name : "Intermediate Size Basketball",
    rating : {
        stars : 4,
        count : 127
    },
    priceCent : 2095
} , {
    image : "Index/Products/adults-plain-cotton-tshirt-2-pack-teal.jpg" ,
    name : "Adults Plain Cotton T-Shirt - 2 Pack",
    rating : {
        stars : 4.5,
        count : 56
    },
    priceCent : 799 
}]
let proHTML = ``;
products.forEach((product) => {
    proHTML += `
      <section class="socks-pro">
        <div class="product"> <img class="socks" src="${product.image}" alt="Socks">
        </div>
        <p class="pro-info">${product.name}</p>
        <div class="rating-pro">
          <span> <img class="pro-star" src="${product.rating.stars * 10}" alt="Stars"></span>
          <span class="rating-num">
            ${product.rating.count}
          </span>
        </div>
        <p class="price">$${product.priceCent / 100}</p>
        <select class="num-pro">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
        <div class="cart-btn">
          <button class="cart-pro">Add to Cart</button>
        </div>
      </section>`;
} , {
    image : "Index/Products/black-2-slot-toaster.jpg",
    name : "2 Slot Toaster - Black"
});