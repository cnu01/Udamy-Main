import cousreList from "../components/courseList.js";

let arr = [
  ".slide",
  "#slide_1",
  "#slide_2",
  "#slide_3",
  "#slide_4",
  "#slide_5",
  "#slide_6",
  "#slide_7",
  "#slide_8",
  "#slide_9",
  "#slide_10",
  "#slide_11",
];
let keywords = [
  "web development",
  "web development bootcamp",
  "react",
  "react features",
  "web development features",
  "it and software",
  "sweet courses",
  "personal development",
  "development",
  "business",
  "students",
];
for (let i = 0; i < 11; i++) {
  let data = JSON.parse(localStorage.getItem(keywords[i])) || null;
  if (data !== {} && data !== null) {
    cousreList(data, document.querySelector(arr[i]));
  } else {
    setTimeout(async () => {
      console.log("here");
      let data = await fetchData(i, keywords[i]);
      localStorage.setItem(keywords[i], JSON.stringify(data));
      if (i == 10) {
        location.reload();
      }
    }, 1500);
  }
}
async function fetchData(i, key) {
  try {
    let res = await fetch(`/coursedata/category?key=${key}`);
    let data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

document.querySelector("#slide1").onclick = () => {
  document.querySelector(".slide").style.marginLeft = "-1292px";
  document.querySelector("#slideP1").style.display = "flex";
  document.querySelector("#slide1").style.display = "none";
};
document.querySelector("#slideP1").onclick = () => {
  document.querySelector(".slide").style.marginLeft = "0";
  document.querySelector("#slideP1").style.display = "none";
  document.querySelector("#slide1").style.display = "flex";
};

// ------------------------------
// let d = JSON.parse(localStorage.getItem("pData"))
// 2nd

document.querySelector("#slide1_11").onclick = () => {
  document.querySelector("#slide_1").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_1").style.display = "flex";
  document.querySelector("#slide1_11").style.display = "none";
};
document.querySelector("#slideP1_1").onclick = () => {
  document.querySelector("#slide_1").style.marginLeft = "0";
  document.querySelector("#slideP1_1").style.display = "none";
  document.querySelector("#slide1_11").style.display = "flex";
};

// let d3 =
// 3rd

document.querySelector("#slide1_21").onclick = () => {
  document.querySelector("#slide_2").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_2").style.display = "flex";
  document.querySelector("#slide1_21").style.display = "none";
};
document.querySelector("#slideP1_2").onclick = () => {
  document.querySelector("#slide_2").style.marginLeft = "0";
  document.querySelector("#slideP1_2").style.display = "none";
  document.querySelector("#slide1_21").style.display = "flex";
};

// 4th

document.querySelector("#slide1_31").onclick = () => {
  document.querySelector("#slide_3").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_3").style.display = "flex";
  document.querySelector("#slide1_31").style.display = "none";
};
document.querySelector("#slideP1_3").onclick = () => {
  document.querySelector("#slide_3").style.marginLeft = "0";
  document.querySelector("#slideP1_3").style.display = "none";
  document.querySelector("#slide1_31").style.display = "flex";
};
console.log("d");

// 5th

document.querySelector("#slide1_41").onclick = () => {
  document.querySelector("#slide_4").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_4").style.display = "flex";
  document.querySelector("#slide1_41").style.display = "none";
};
document.querySelector("#slideP1_4").onclick = () => {
  document.querySelector("#slide_4").style.marginLeft = "0";
  document.querySelector("#slideP1_4").style.display = "none";
  document.querySelector("#slide1_41").style.display = "flex";
};

// 6th
document.querySelector("#slide1_51").onclick = () => {
  document.querySelector("#slide_5").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_5").style.display = "flex";
  document.querySelector("#slide1_51").style.display = "none";
};
document.querySelector("#slideP1_5").onclick = () => {
  document.querySelector("#slide_5").style.marginLeft = "0";
  document.querySelector("#slideP1_5").style.display = "none";
  document.querySelector("#slide1_51").style.display = "flex";
};

// 7th

document.querySelector("#slide1_61").onclick = () => {
  document.querySelector("#slide_6").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_6").style.display = "flex";
  document.querySelector("#slide1_61").style.display = "none";
};
document.querySelector("#slideP1_6").onclick = () => {
  document.querySelector("#slide_6").style.marginLeft = "0";
  document.querySelector("#slideP1_6").style.display = "none";
  document.querySelector("#slide1_61").style.display = "flex";
};

// 8th

document.querySelector("#slide1_71").onclick = () => {
  document.querySelector("#slide_7").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_7").style.display = "flex";
  document.querySelector("#slide1_71").style.display = "none";
};
document.querySelector("#slideP1_7").onclick = () => {
  document.querySelector("#slide_7").style.marginLeft = "0";
  document.querySelector("#slideP1_7").style.display = "none";
  document.querySelector("#slide1_71").style.display = "flex";
};

// 9th

document.querySelector("#slide1_81").onclick = () => {
  document.querySelector("#slide_8").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_8").style.display = "flex";
  document.querySelector("#slide1_81").style.display = "none";
};
document.querySelector("#slideP1_8").onclick = () => {
  document.querySelector("#slide_8").style.marginLeft = "0";
  document.querySelector("#slideP1_8").style.display = "none";
  document.querySelector("#slide1_81").style.display = "flex";
};

// 10th

document.querySelector("#slide1_91").onclick = () => {
  document.querySelector("#slide_9").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_9").style.display = "flex";
  document.querySelector("#slide1_91").style.display = "none";
};
document.querySelector("#slideP1_9").onclick = () => {
  document.querySelector("#slide_9").style.marginLeft = "0";
  document.querySelector("#slideP1_9").style.display = "none";
  document.querySelector("#slide1_91").style.display = "flex";
};

// 11th

document.querySelector("#slide1_101").onclick = () => {
  document.querySelector("#slide_10").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_10").style.display = "flex";
  document.querySelector("#slide1_101").style.display = "none";
};
document.querySelector("#slideP1_10").onclick = () => {
  document.querySelector("#slide_10").style.marginLeft = "0";
  document.querySelector("#slideP1_10").style.display = "none";
  document.querySelector("#slide1_101").style.display = "flex";
};

// 12th
document.querySelector("#slide1_111").onclick = () => {
  document.querySelector("#slide_11").style.marginLeft = "-1292px";
  document.querySelector("#slideP1_11").style.display = "flex";
  document.querySelector("#slide1_111").style.display = "none";
};
document.querySelector("#slideP1_11").onclick = () => {
  document.querySelector("#slide_11").style.marginLeft = "0";
  document.querySelector("#slideP1_11").style.display = "none";
  document.querySelector("#slide1_111").style.display = "flex";
};

// d1 = JSON.stringify(d1);
// d2 = JSON.stringify(d2);
// d3 = JSON.stringify(d3);
// d4 = JSON.stringify(d4);
// d5 = JSON.stringify(d5);
// d6 = JSON.stringify(d6);
// d7 = JSON.stringify(d7);
// d8 = JSON.stringify(d8);
// d9 = JSON.stringify(d9);
// d10 = JSON.stringify(d10);
// d11 = JSON.stringify(d11);

// module.exports = { d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11 };

// let arr = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11];
// let datagh = [];
// for (let i = 0; i < arr.length; i++) {
//   let data = arr[i];
//   let senddata = {};
//   for (let j = 0; j < data.length; j++) {
// senddata.title = data[j].snippet.title;
// senddata.created_by = data[j].snippet.title;
// senddata.price = 525;
// senddata.thumbnails = data[j].snippet.thumbnails.high.url;
// senddata.creater_name = data[j].snippet.channelTitle;
// senddata.original_price = 3449;
// senddata.duration = Math.floor(Math.random() * (6 - 1) + 1);
// senddata.lecture = Math.floor(Math.random() * (100 - 10) + 10);
// senddata.description = data[j].snippet.description;
// senddata.level = data[j].snippet.level;
// senddata.video = data[j].id.videoId;
// console.log(senddata);
//   }
// }

// let arr = [];

// for (let i = 0; i < 10; i++) {
//   let obj = {};
//   obj.title = d11[i].snippet.title;
//   obj.created_by = "61e984e9590ad7b17ba54c6a";
//   obj.price = 525;
//   obj.thumbnails = d11[i].snippet.thumbnails.high.url;
//   obj.creater_name = "Jaskaran Singh";
//   obj.original_price = 3449;
//   obj.category = "students";
//   obj.duration = 1;
//   obj.lecture = 25;
//   obj.description = d11[i].snippet.description;
//   obj.level = "beginner";
//   obj.video = d11[i].id.videoId;
//   obj.tag = "61e924bc9ad44ed5f41a26b2";
//   arr.push(obj);
// }
// localStorage.setItem("d20", JSON.stringify(arr));
