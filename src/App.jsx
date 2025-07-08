import { useState } from "react";
import PLANTS from "./data";
import Plants from "./Plants";
import Cart from "./Cart";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const exists = cart.find((item) => item.id === plant.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const removeFromCart = (plantToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === plantToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <header>
        <h1>🌿 Proper Plants 🌿</h1>
      </header>

      <main className="main-content">
        <section className="plant-section">
          <h2>Plants</h2>
          <Plants plants={PLANTS} addToCart={addToCart} />
        </section>

        <aside className="cart-section">
          <h2>Cart</h2>
          <Cart
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
