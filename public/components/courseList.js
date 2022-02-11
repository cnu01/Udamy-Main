const courseList = (data, slide) => {
  data.map((data, i) => {
    if (i < 10) {
      let d = document.createElement("div");
      d.classList.add("slide-div");
      d.innerHTML = ` <div class="img-div"> <img
        src="${data.thumbnails}" alt=""></div>
    <h3>${data.title}</h3>
    <p>${data.creater_name}</p>
    <h4>₹525 <span class="x3">₹3,499</span></h4>
    `;
      let hoverDiv = document.createElement("div");
      hoverDiv.classList.add("hover-div2");
      if (i == 4 || i == 9) {
        hoverDiv.classList.add("hover-div2-left");
      } else {
        hoverDiv.classList.add("hover-div2-right");
      }
      hoverDiv.style.display = "none";
      let h4 = document.createElement("h4");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      h4.innerHTML = `What you’ll learn`;
      p1.innerHTML = `<img class="icon tick2" src="/assets/tick.png"> Top quelity Course for all levels`;
      p2.innerHTML = `<img class="icon tick2" src="/assets/tick.png"> Learn how your listening dictates your reality and`;
      p3.innerHTML = `<img class="icon tick2" src="/assets/tick.png"> Use de-facto standard routing solution for React`;
      let cartDiv = document.createElement("div");
      cartDiv.classList.add("cart-div2");
      let cart = document.createElement("button");
      cart.textContent = "Add To Cart";
      cartDiv.append(cart);
      hoverDiv.append(h4, p1, p2, p3, cartDiv);
      d.append(hoverDiv);
      slide.append(d);
      d.addEventListener("click", () => {
        let obj = { name: id, data: snippet };
        localStorage.setItem("course", JSON.stringify(obj));
      });
      d.addEventListener("mouseenter", () => {
        hoverDiv.style.display = "block";
      });
      d.addEventListener("mouseleave", () => {
        hoverDiv.style.display = "none";
      });
      cart.addEventListener("click", () => {
        let arr = JSON.parse(localStorage.getItem("courseCart")) || [];
        if (cart.textContent == "Add To Cart") {
          let obj = { id: id, snippet: snippet };
          arr.push(obj);
          localStorage.setItem("courseCart", JSON.stringify(arr));
          cart.textContent = "Remove From Cart";
        } else if (cart.textContent == "Remove From Cart") {
          arr.pop();
          localStorage.setItem("courseCart", JSON.stringify(arr));
          cart.textContent = "Add To Cart";
        }
      });
    }
  });
};
export default courseList;
