const products = [];

const cherry = {
  name: "Cherry",
  price: 4.99,
  quantity: 0,
  productId: 111,
  image: "./images/cherry.jpg",
};

const orange = {
  name: "Orange",
  price: 6.99,
  quantity: 0,
  productId: 222,
  image: "./images/orange.jpg",
};

const strawberry = {
  name: "Strawberry",
  price: 9.99,
  quantity: 0,
  productId: 333,
  image: "./images/strawberry.jpg",
};
/* ################################################### 
        Begin addProductToCart Function
   ################################################### 
*/

// Add products to products array
products.push(cherry, orange, strawberry);

const cart = [];

function addProductToCart(sku) {
  // Find the product by SKU
  const product = products.find((p) => p.productId === sku);

  if (!product) {
    
    return;
  }
  // Check if the product is already in the cart
  const cartItem = cart.find((item) => item.productId === sku);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    // Add the product to the cart with quantity of 1
    cart.push({
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }
}
/* ################################################### 
        Begin increaseQuantity Function
   ################################################### 
*/
function increaseQuantity(productId) {
  // Find the product in the cart by its productId
  const product = cart.find((product) => product.productId === productId);

  // Increase the quantity of the product in the cart by 1
  product.quantity++;
}
/* ################################################### 
        Begin decreaseQuantity Function
   ################################################### 
*/
function decreaseQuantity(productId) {
  // Find the product in the cart by its productId
  const productIndex = cart.findIndex(product => product.productId === productId);

  // If the product exists in the cart
  if (productIndex !== -1) {
    const product = cart[productIndex];

    // If the product quantity is greater than 1, decrease it by 1
    if (product.quantity > 1) {
      product.quantity--;
    }
    // Otherwise, remove the product from the cart
    else {
      cart.splice(productIndex, 1);
    }
  }
}
/* ################################################### 
        Begin removeProductFromCart Function
   ################################################### 
*/

function removeProductFromCart(productId) {
 const productIndex = cart.findIndex((item) => item.productId === productId);

 // if product is not found in cart
 if (productIndex === -1) {
  return;
 }
  // remove product from cart
  cart.splice(productIndex, 1);
}

/* ################################################### 
        Begin cartTotal Function
   ################################################### 
*/

// need global totalPaid variable
function cartTotal() {

  let totalPaid = 0;
  for (const product of cart) {
    totalPaid += amount;
  }
  return totalPaid - cartTotal();
}
/* ################################################### 
        Begin pay Function
   ################################################### 
*/
function pay(amount) {
  return amount - cartTotal();
}
/* ################################################### 
        Begin emptyCart Function
   ################################################### 
*/
function emptyCart() {
  cart.splice(0, cart.length)
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
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};