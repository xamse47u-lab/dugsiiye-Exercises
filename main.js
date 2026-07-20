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

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let speedTrue = true;
//       if (speedTrue) {
//         resolve("war waan fiicanahay seetahay adiga");
//       } else {
//         reject("war waan xanuunsanahay");
//       }
//     }, 2000);
//   });
// }

// async function sooDaabac() {
//   try {
//     let user = await fetchUserData();
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   }
// }
// sooDaabac();

// async function fetchData() {
//   console.log("war data da waa la soo qaaday");

//   const response = await fetch("https://jsonplaceholder.typicode.com/photos");

//   const data = await response.json();

//   console.log("wara waa tan data da :", data);
// }
// fetchData();

// function operate(a, b, callback) {
//   return callback(a, b);
// }

// function multiply(a, b) {
//   return a * b;
// }
// function division(a, b) {
//   return a / b;
// }
// function addition(a, b) {
//   return a + b;
// }

// console.log(operate(5, 7, multiply));
// console.log(operate(5, 7, addition));
// console.log(operate(5, 7, division));
async function postData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: "laaes ahmed",
        username: "yaasir",
        email: "hamse@gmail.com",
        address: {
          street: "line Dheere",
          city: "bali",
        },
        phone: "2527093635",
        website: "dugsiiye.com",
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error : ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

postData();
