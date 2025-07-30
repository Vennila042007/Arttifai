function addToCart(item) {
  const cartList = document.getElementById("cartItems");
  const li = document.createElement("li");
  li.textContent = item + " added to cart.";
  cartList.appendChild(li);
}
