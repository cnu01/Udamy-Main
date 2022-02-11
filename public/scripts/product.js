const mapProducts = () => {
  let prod = document.querySelectorAll(".left-prod");
  let hover = document.querySelectorAll(".hover-div");
  let cart = document.querySelectorAll(".addToCart");
  let id = document.querySelectorAll(".idValue");
  prod.forEach((p, i) => {
    p.addEventListener("mouseenter", () => {
      hover[i].style.display = "block";
    });
    p.addEventListener("mouseleave", () => {
      hover[i].style.display = "none";
    });
    cart[i].onclick = () => {
      if (cart[i].textContent == "Add To Cart") {
        addToCart(id[i].value);
        cart[i].textContent = "Remove From Cart";
      } else if (cart[i].textContent == "Remove From Cart") {
        cart[i].textContent = "Add To Cart";
      }
    };
  });
};
mapProducts();

async function addToCart(id) {
  try {
    let data = { cart: id };
    let token = JSON.parse(localStorage.getItem("token"));
    if (token && token !== "") {
      await fetch("/cart/add", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
    }
  } catch (err) {
    console.log(err);
  }
}
