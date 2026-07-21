// const heading = document.querySelector("#heading1");
// console.log(heading);

// const paragraph = document.querySelector("#para");
// console.log(paragraph);

// const buttons = document.querySelectorAll(".button");
// console.log(buttons);

// function ChangeContent() {
//   paragraph.textContent = "Welcome my first DOM";
//   //   console.log("welcome our website");
// }
// function ChangeText() {
//   heading.innerHTML = "Hi welcome our website DOM document";
// }
const list = document.querySelector("#list");

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "item 4";

  list.appendChild(newItem);
}

function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    alert("war waa lagu kala baxay");
  }
}
