function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>

      {cartItems.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;