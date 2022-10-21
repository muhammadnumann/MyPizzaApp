const menuData = [
  {
    id: 1,
    title: "All Meat",
    img: "product-images/pizza_img3.jpg",
    desc: "Our standard “Mexican” is loaded",
    price: 10,
  },
  {
    id: 2,
    title: "Mexican Pizza",
    img: "product-images/pizza_img5.png",
    desc: "Our standard “Mexican” is loaded",
    price: 545,
  },
  {
    id: 3,
    title: "Barbecue Chicken",
    img: "product-images/pizza_img4.jpg",
    desc: "Our standard “Mexican” is loaded",
    price: 1390,
  },
  {
    id: 4,
    title: " Tuscan Roma",
    img: "product-images/pizza_img1.jpg",
    desc: "Our standard “Mexican” is loaded",
    price: 150,
  },
  {
    id: 5,
    title: "Buffalo Chicken",
    img: "product-images/pizza_img6.jpg",
    desc: "Our standard “Mexican” is loaded",
    price: 5450,
  },
  {
    id: 6,
    title: "Max & Cheese",
    img: "product-images/pizza_img2.jpg",
    desc: "Our standard “Mexican” is loaded",
    price: 5050,
  },
];

const cardText = document.querySelector("#p_Card");

let html = "";

let cartData = [];

const AddToCart = (data) => {
  alert(JSON.stringify(data));
};

let output = "";
menuData.forEach(function (item) {
  output += `
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
  <ul>

      <li>
          <div class="card">
              <div class="C_img"> <img src=${item.img}
                      class="absoImg" alt=""> </div>
              <div class="C_desc">
                  <h3 class="title">${item.title}</h3>
                  <p class="desc">${item.desc}</p>
                  <div class="price_block">
                      <div class="price">$  ${item.price}</div>
                      <a onclick="{AddToCart(item)}" href = "orderpage.html" class="card_btn px-4">Order </a>
                  </div>
              </div>
          </div>
      </li>
  </ul>
</div>
`;
});
document.getElementById("p_Card").innerHTML = output;










