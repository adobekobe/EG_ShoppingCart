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

function cartTotal() {
  let total = 0;

  for (const product of cart) {
    total += product.price * product.quantity;
  }

  return total;
}

function pay(amount) {
  return amount - cartTotal();
}

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

