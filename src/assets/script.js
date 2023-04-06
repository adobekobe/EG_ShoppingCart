const products = [
  {
    name: "Cherry",
    price: 4.99,
    quantity: 0,
    productId: 111,
    image: "./images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 6.99,
    quantity: 0,
    productId: 222,
    image: "./images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 9.99,
    quantity: 0,
    productId: 333,
    image: "./images/strawberry.jpg",
  }
];

const cart = [];

function addProductToCart(sku) {
  const product = products.find((p) => p.productId === sku);

  if (!product) {
    return;
  }

  const cartItem = cart.find((item) => item.productId === sku);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    product.quantity++;
    cart.push({
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }
}

function increaseQuantity(productId) {
  const product = cart.find((product) => product.productId === productId);

  if (product) {
    product.quantity++;
  }
}

function decreaseQuantity(productId) {
  const productIndex = cart.findIndex((product) => product.productId === productId);

  if (productIndex !== -1) {
    const product = cart[productIndex];

    if (product.quantity > 1) {
      product.quantity--;
    } else {
      cart.splice(productIndex, 1);
    }
  }
}

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex((item) => item.productId === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }
}
// Helper Function
function getProduct(productId, productList) 
{  return productList.find((item) => item.productId === productId);}
/*Begin cartTotal Function
################################################### 
*/

function cartTotal() {
let total = 0;
cart.forEach((product) => {
 total += product.quantity * product.price;
});
return (total);
}

/* 
     Begin pay Function

*/

// need global totalPaid variable
let totalPaid = 0;

function pay(amount) {
totalPaid += amount;

return totalPaid - cartTotal()
}

// let remaining = cartTotal();
// let payment = 0;

// while (remaining > 0) {
//   payment = prompt(`Cart total is ${remaining.toFixed(2)}. Enter payment amount:`);
//   payment = parseFloat(payment);

//   if (isNaN(payment)) {
//     console.log("Invalid payment amount. Please try again.");
//     continue;
//   }

//   remaining = pay(payment);

//   if (remaining > 0) {
//     console.log(`Payment accepted. Remaining balance is ${remaining.toFixed(2)}.`);
//   } else {
//     console.log("Thank you for your purchase!");
//   }
// }

function emptyCart() {
  cart.splice(0, cart.length);
}

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
};

