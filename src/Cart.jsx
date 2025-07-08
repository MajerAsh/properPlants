function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <button
                onClick={() => removeFromCart(item)}
                style={{ color: "red" }}
              >
                -
              </button>
              <span>
                {" "}
                {item.image} {item.name}: {item.quantity}{" "}
              </span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Cart;
