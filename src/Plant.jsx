export default function Plant({ plant, addToCart }) {
  return (
    <div className="plant">
      <div className="plant-content">
        <div className="plant-image">{plant.image}</div>
        <div className="plant-name">{plant.name}</div>

        {/* note for mushroom */}
        {plant.name === "Mushroom" && (
          <div className="plant-note">
            * Please note: fungi are not plants and certainly not a proper plant
          </div>
        )}

        <button onClick={() => addToCart(plant)}>Add to Cart</button>
      </div>
    </div>
  );
}
