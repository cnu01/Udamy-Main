let contain = document.getElementById("container");
let data;
async function length() {
  let token = JSON.parse(localStorage.getItem("token"));
  if (token && token !== "") {
    let res = await fetch("/cart/data", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    let data = await res.json();
    shoppingCart(data);
  } else {
    alert("error");
  }
}
length();

let courses_zero = document.getElementById("courses_zero");
courses_zero.innerHTML = `${
  JSON.parse(localStorage.getItem("countCart")).length || 0
} Courses in Cart`;

function shoppingCart(data) {
  if (data.length !== 0) {
    contain.innerHTML = "";
    let jsdata = document.createElement("div");
    jsdata.setAttribute("id", "jsdata");
    contain.append(jsdata);

    let cart_left = document.createElement("div");
    cart_left.setAttribute("id", "card_left");

    let card_right = document.createElement("div");
    card_right.setAttribute("id", "card_right");
    jsdata.append(card_right, cart_left);

    let div_for_price_and_all = document.createElement("div");
    div_for_price_and_all.setAttribute("id", "div_for_price_and_all");
    cart_left.append(div_for_price_and_all);
    let cart_price_totla = document.createElement("h3");
    cart_price_totla.innerHTML = `Total : `;
    cart_price_totla.setAttribute("id", "cart_price_totla");
    let cart_price_amount = document.createElement("h1");
    cart_price_amount.innerHTML = `₹ ${
      JSON.parse(localStorage.getItem("countCart")).length * 525
    }`;
    cart_price_amount.setAttribute("id", "cart_price_amount");

    let cart_price_off = document.createElement("p");
    cart_price_off.innerHTML = ` ₹ ${
      JSON.parse(localStorage.getItem("countCart")).length * 3499
    } `;
    cart_price_off.setAttribute("id", "cart_price_oof");
    let Div_for_button = document.createElement("div");
    Div_for_button.setAttribute("class", "Div_for_button");
    let Button_for_checkout = document.createElement("button");
    Button_for_checkout.setAttribute("class", "Button_for_checkout");
    Button_for_checkout.innerHTML = `<a href="/checkout">Checkout</a>`;

    let Promitions_for_checkout = document.createElement("h3");
    Promitions_for_checkout.innerHTML = `Promotions:`;
    let Coupon_applied = document.createElement("h3");
    Coupon_applied.innerHTML = `❌ MASAI30 is applied`;
    let input_for_checkout = document.createElement("input");
    input_for_checkout.setAttribute("id", "input_for_checkout");
    let but_for_appaly = document.createElement("button");
    but_for_appaly.setAttribute("id", "but_for_appaly");
    but_for_appaly.innerHTML = "Apply";

    Div_for_button.append(input_for_checkout, but_for_appaly);
    div_for_price_and_all.append(
      cart_price_totla,
      cart_price_amount,
      cart_price_off,
      Button_for_checkout,
      Promitions_for_checkout,
      Coupon_applied,
      Div_for_button
    );

    data.forEach((d, i) => {
      let div_for_ap = document.createElement("div");
      div_for_ap.setAttribute("id", "div_for_ap");
      card_right.append(div_for_ap);
      let image1 = document.createElement("img");
      image1.src = d.thumbnails;
      image1.setAttribute("class", "image1");

      let div_coursedetails = document.createElement("div");
      div_coursedetails.setAttribute("class", "div_coursedetails");
      let title_h2 = document.createElement("h2");
      title_h2.setAttribute("class", "title_h2");
      title_h2.innerHTML = `${d.title}`;

      author_h2 = document.createElement("h6");
      author_h2.setAttribute("class", "author_h2");
      author_h2.innerHTML = `${d.creater_name}`;
      let hours_total_lecutres = document.createElement("div");
      hours_total_lecutres.setAttribute("class", "hours_total_lecutres");
      let total_hours = document.createElement("p");
      total_hours.innerHTML = `${d.duration} Hours `;
      let time_hours = document.createElement("p");
      time_hours.innerHTML = ` • ${d.creater_name}`;
      let levels = document.createElement("p");
      levels.innerHTML = `• All Levels`;

      hours_total_lecutres.append(total_hours, time_hours, levels);

      div_coursedetails.append(title_h2, author_h2, hours_total_lecutres);

      let remove_add = document.createElement("div");
      remove_add.setAttribute("class", "remove_add");

      let remove_h6 = document.createElement("h6");
      let saveforlater = document.createElement("h6");
      let movetowish = document.createElement("h6");
      remove_h6.setAttribute("class", "universal_remove_add");
      remove_h6.setAttribute("id", "remove_h61");
      saveforlater.setAttribute("class", "universal_remove_add");
      movetowish.setAttribute("class", "universal_remove_add");
      saveforlater.setAttribute("id", "savelater_h61");
      remove_h6.innerHTML = "Remove";
      saveforlater.innerHTML = "Save for Later";
      movetowish.innerHTML = "Move to Wishlist";
      remove_add.append(remove_h6, saveforlater, movetowish);

      let price_cartshop = document.createElement("div");
      price_cartshop.setAttribute("class", "price_cartshop");
      let last_price = document.createElement("h3");
      last_price.innerHTML = `₹525`;
      last_price.setAttribute("class", "last_price");
      let price_before_discount = document.createElement("h3");
      price_before_discount.innerHTML = `₹3499`;
      price_before_discount.setAttribute("class", "price_before_disc");

      price_cartshop.append(last_price, price_before_discount);

      div_for_ap.append(image1, div_coursedetails, remove_add, price_cartshop);
      remove_h6.addEventListener("click", () => {
        removeCart(i);
      });
    });
  }
}
async function removeCart(i) {
  try {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token && token !== "") {
      await fetch("/cart/remove", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ i }),
      });
    }
    location.href = "/cart";
  } catch (err) {
    console.log(err);
  }
}
