// const schedule = (pin, callback) => {
//   setTimeout(() => {
//     const data = {
//       time: "now",
//       day: "Today",
//     };

//     // return data  THIS WONT WORK, schedule wont return the data inside the setTimeout
//     //thats why a callback function is needed to return the data.
//     //return is nested inside another function, thats why scheudle wont return a value back without a callback function

//     callback(data); //callback returns the data instead
//   }, 2000);
// };

// schedule("1234", (data) => {
//   console.log(data);
// });

//When writing async functions you wont be able to return data from a nested function without a callback.

const add = (a, b, sum) => {
  setTimeout(() => {
    sum(a + b);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
