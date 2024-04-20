const box = document.querySelector(".div1");
console.dir(box);

// box.onclick = () => {
//   alert(2);
// };

// let selectDiv;

// box.addEventListener("click", (event) => {
//   console.log(event);
//   if (selectDiv) {
//     selectDiv.classList.remove("select");
//   }
//   selectDiv = event.target;
//   event.target.classList.add("select");
// });

// function func(e) {
//   let x = e.clientX - 50;
//   let y = e.clientY - 50;
//   box.style.top = y + "px";
//   box.style.left = x + "px";
//   console.log(e);
// }

// function func2() {
//   document.addEventListener("mousemove", func);
// }

// function func3() {
//   document.removeEventListener("mousemove", func);
// }

// box.addEventListener("mousedown", func2);
// document.addEventListener("mouseup", func3);
let leftBox = 0;
let topBox = 0;
function func4(e) {
  console.log(e);

  //   if (e.repeat) {
  //     return;
  //   }

  if (e.key === "r") {
    leftBox += 5;
    box.style.left = leftBox + "px";
  }

  if (e.key === "l") {
    leftBox -= 5;
    box.style.left = leftBox + "px";
  }

  if (e.key === "b") {
    topBox += 50;
    box.style.top = topBox + "px";
  }

  if (e.key === "t") {
    topBox -= 5;
    box.style.top = topBox + "px";
  }
}

document.addEventListener("keydown", func4);
