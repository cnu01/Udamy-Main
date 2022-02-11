const navbar = () => {
  let cartCount = 0;
  async function length() {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token && token !== "") {
      let res = await fetch("/cart/length", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      let data = await res.json();
      localStorage.setItem("countCart", JSON.stringify(data));
    } else {
      localStorage.setItem("countCart", JSON.stringify({ length: 0 }));
    }
  }
  length();
  cartCount = JSON.parse(localStorage.getItem("countCart")).length;
  return `<div class="sale-nav">
    <div class="sale-contant">
        <div class="sale-info">
            <h2> <span class="bold-info"> Sale ends today |</span> Expand your potential through learning.
                Courses start at just
                ₹525.</h2>
            <h1 class="timer bold-info"></h1>
        </div>
        <div class="remove-sale">
            <img width="17px" src="/assets/cross.png" alt="" srcset="">
        </div>
    </div>
</div>
<div class="main-nav">
    <div class="logo">
        <a href="/"> <img id="logo-img" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="" srcset=""></a>
    </div>
    <div class="categories">
        <a href="" id="categories">Categories</a>
        <div class="cat-menu">
            <div class="first-cat"></div>
            <div class="second-cat"></div>
            <div class="third-cat"></div>
        </div>
    </div>
    <div class="search">
        <div> <img class="icon" src="/assets/search.png" alt="">
            <input id="search" type="search" placeholder="search">

        </div>
        <div class="search-res">
            <div class="autocomplete"></div>
        </div>
    </div>
    <div class="udemy-bus">
        <a href="#">Udemy Business</a>
    </div>
    <div class="teach-on">
        <a href="/instructor">Teach on Udemy</a>
    </div>
    <div class="cart">
        <a href="/cart"> <img class="icon" src="/assets/shopping-cart.png" alt=""> </a>
        <span id="cart-count">${cartCount}</span>
    </div>
    <div class="sign-log">
        <a href="/login"> <button> Log in </button></a>
        <a href="/signup"> <button> Sign up </button></a>
        <div class="user"><img src="/assets/no-user.jpg"></div>
    </div>
    <div class="dark-mode">
        <div class="mods">
            <img src="/assets/night.png" alt="" srcset="">
            <img src="/assets/light.png" alt="" srcset="">
        </div>
    </div>
</div>`;
};

export default navbar;
