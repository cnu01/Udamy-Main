const post = document.getElementsByClassName("post");
const p = post.length;
let i = 0;

setInterval(next, 3000);

function next() {
  if (i === 0) {
    post[i + 1].style = "left:1292px;z-index:1";
    
    post[p - 1].style = "left:-1292px;z-index:1";

    post[i].style = "left:0;z-index:3";
    i++;
  } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "left:-1292px;z-index:1";

    post[i].style = "left:0;z-index:3";

    post[i + 1].style = "left:1292px;z-index:1";
    // b[i + 1].style = "";
    i++;
  } else if (i === p - 1) {
    post[i - 1].style = "left:-1292px;z-index:1";

    post[i].style = "left:0;z-index:3";

    i = 0;

    post[i].style = "left:1292px;z-index:1";
  }
}
