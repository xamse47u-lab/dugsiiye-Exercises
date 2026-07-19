// let cards = ["card1", "card2", "card 3"];
// let cards2 = [...cards, "card3", "card4"];
// console.log(cards2);

// //rest operator

// function multiplyNumbers(...numbers) {
//   return numbers.reduce((num, total) => num * total, 1);
// }

// console.log(multiplyNumbers(20, 54, 71, 2));
// console.log(multiplyNumbers(71, 2));

// function sooCeli() {
//   alert("war ilaa aad i dhaafto ma tagaysid");

//   return { id: 12, name: "Eng Hamse" };
// }

// const user = sooCeli();

// console.log(user);

// console.log("waa i kan aniga waan soo dhaqsaday");

// function nonBlocking() {
//   setTimeout(() => {
//     console.log("waad soo daahday nio maxaa kaa qaldan");
//   }, 2000);
// }

// console.log("hada ayaan bilabmanaysaa hawsha");

// nonBlocking();

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let speedTrue = true;
      if (speedTrue) {
        resolve("war waan fiicanahay seetahay adiga");
      } else {
        reject("war waan xanuunsanahay");
      }
    }, 2000);
  });
}

fetchUserData()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
