$(document).ready(function () {
  var productItem = [
    {
      productName: "All Meat ",
      price: "20.00",
      photo: "pizza_img3.jpg",
    },
    {
      productName: "Lunch Special Pizza ",
      price: "17.00",
      photo: "pizza_img5.png",
    },
    {
      productName: "Barbecue Chicken ",
      price: "15.00",
      photo: "pizza_img4.jpg",
    },
    {
      productName: "Tuscan Roma ",
      price: "18.00",
      photo: "pizza_img1.jpg",
    },
    {
      productName: "Buffalo Chicken",
      price: "20.00",
      photo: "pizza_img6.jpg",
    },
    {
      productName: "Max & Cheese",
      price: "15.00",
      photo: "pizza_img2.jpg",
    },
  ];
  showProductGallery(productItem);
  showCartTable();
});

function addToCart(element) {
  alert("Product added to Cart.");
  var productParent = $(element).closest("div.card");

  var price = $(productParent).find(".price span").text();
  var productName = $(productParent).find(".productname").text();
  var quantity = $(productParent).find(".product-quantity").val();

  var cartItem = {
    productName: productName,
    price: price,
    quantity: quantity,
  };
  var cartItemJSON = JSON.stringify(cartItem);

  var cartArray = new Array();
  // If javascript shopping cart session is not empty
  if (sessionStorage.getItem("shopping-cart")) {
    cartArray = JSON.parse(sessionStorage.getItem("shopping-cart"));
  }
  cartArray.push(cartItemJSON);

  var cartJSON = JSON.stringify(cartArray);
  sessionStorage.setItem("shopping-cart", cartJSON);
  showCartTable();
}

function emptyCart() {
  if (sessionStorage.getItem("shopping-cart")) {
    // Clear JavaScript sessionStorage by index
    sessionStorage.removeItem("shopping-cart");
    showCartTable();
  }
}

function removeCartItem(index) {
  if (sessionStorage.getItem("shopping-cart")) {
    var shoppingCart = JSON.parse(sessionStorage.getItem("shopping-cart"));
    sessionStorage.removeItem(shoppingCart[index]);
    showCartTable();
  }
}

function showCartTable() {
  var cartRowHTML = "";
  var itemCount = 0;
  var grandTotal = 0;

  var price = 0;
  var quantity = 0;
  var subTotal = 0;

  if (sessionStorage.getItem("shopping-cart")) {
    var shoppingCart = JSON.parse(sessionStorage.getItem("shopping-cart"));
    itemCount = shoppingCart.length;

    //Iterate javascript shopping cart array
    shoppingCart.forEach(function (item) {
      var cartItem = JSON.parse(item);
      price = parseFloat(cartItem.price);
      quantity = parseInt(cartItem.quantity);
      subTotal = price * quantity;

      cartRowHTML +=
        "<tr>" +
        "<td>" +
        cartItem.productName +
        "</td>" +
        "<td class='text-right'>$" +
        price.toFixed(2) +
        "</td>" +
        "<td class='text-right'>" +
        quantity +
        "</td>" +
        "<td class='text-right'>$" +
        subTotal.toFixed(2) +
        "</td>" +
        "</tr>";

      grandTotal += subTotal;
    });
  }

  $("#cartTableBody").html(cartRowHTML);
  $("#itemCount").text(itemCount);
  $("#totalAmount").text("$" + grandTotal.toFixed(2));
  document.getElementById("cartcount").innerHTML = `Cart : ${grandTotal.toFixed(
    2
  )}$`;
}

function showProductGallery(product) {
  //Iterate javascript shopping cart array
  var productHTML = "";
  product.forEach(function (item) {
    productHTML +=
      '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12"><ul><li><div class="card">' +
      '<div class="C_img"><img class="absoImg" src="product-images/' +
      item.photo +
      '"></div>' +
      '<div class="C_desc pt-5 pb-3">' +
      '<h3 class="title productname">' +
      item.productName +
      "</h3>" +
      '<div class="price">$<span>' +
      item.price +
      "</span></div>" +
      '<div class="cart-action">' +
      '<input type="text" class="product-quantity" name="quantity" value="1" size="2" />' +
      '<input type="submit" value="Add to Cart" class="add-to-cart" onClick="addToCart(this)" />' +
      "</div>" +
      "</div>" +
      "</li></ul></div></div>";
    ("<tr>");
  });
  $("#product-item-container").html(productHTML);
}
