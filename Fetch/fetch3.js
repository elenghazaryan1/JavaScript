// // Names of products that costs less than $50
// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//     const price = products
//       .filter((product) => product.price < 50)
//       .map((product) => product.title);

//     console.log(price);
//   });

// //The most expensive product

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//     const mostExpensive = products.reduce((max, product) => {
//       return product.price > max.price ? product : max;
//     });
//     console.log(mostExpensive);
//   });

// Only products from the 'electronics category

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//     const electronics = products.filter(
//       (product) => product.category === "electronics",
//     );
//     console.log(electronics);
//   });

// Calculate the average price of all products

fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    const averagePrice =
      products
        .map((product) => product.price)
        .reduce((initialValue, product) => initialValue + product, 0) /
      products.length;

    console.log(averagePrice);
  });
