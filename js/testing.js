const showCheckoutDileveryAddress = () => {
  document.getElementById("checkoutdileveryaddress").classList.add("d-block");
  document.getElementById("copycheck").classList.add("d-flex");
};
const hideCheckoutDileveryAddress = () => {
  document
    .getElementById("checkoutdileveryaddress")
    .classList.remove("d-block");
  document.getElementById("copycheck").classList.remove("d-flex");
};

const showOnlinePayment = () => {
  document.getElementById("onlinepaymentsystem").classList.add("d-block");
};
const hideOnlinePayment = () => {
  document.getElementById("onlinepaymentsystem").classList.remove("d-block");
};

function resetForm() {
  document.getElementById("userInfoForm").reset();
  var usernameregistered = sessionStorage.getItem("registeredusername");
  document.getElementById("nameuserinfo").value = usernameregistered;
}

function Creditcarddigitmore() {
  document.getElementById("cardno16").classList.add("d-block");
  document.getElementById("cardno15").classList.remove("d-block");
}

function Creditcarddigitless() {
  document.getElementById("cardno16").classList.remove("d-block");
  document.getElementById("cardno15").classList.add("d-block");
}

function validateResgisterForm() {
  var username = document.getElementById("registeredname").value;
  // var pattern = /^[a-zA-Z ]+$/;
  // if (username.match(pattern)) {
  //   alert("Name contains symbols.\n")
  // }
  sessionStorage.setItem("registeredusername", username);
}

var usernameregistered = sessionStorage.getItem("registeredusername");
if (usernameregistered!=""){
  document.getElementById("nameuserinfo").value = usernameregistered;
}

function copyDileveryAddress() {
  var checkbox = document.getElementById("copydileveryaddres");
  if (checkbox.checked == true) {
    var street = document.getElementById("streetaddress").value;
    var apartement = document.getElementById("apartementaddress").value;

    if (street && apartement != "") {
      var billingstreet = (document.getElementById(
        "billingstreetaddress"
      ).value = street);
      var billingapartement = (document.getElementById(
        "billingapartementaddress"
      ).value = apartement);
    } else {
      alert("Please fill the Dilevery Address first");
      $("#copydileveryaddres").prop("checked", false);
    }
  } else {
    var billingstreet = (document.getElementById("billingstreetaddress").value =
      "");
    var billingapartement = (document.getElementById(
      "billingapartementaddress"
    ).value = "");
  }
}

