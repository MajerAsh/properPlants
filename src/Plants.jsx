import Plant from "./Plant";

function Plants({ plants, addToCart }) {
  return (
    <>
      <div className="plants">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Plants;
