import React, { useContext } from "react";
import ProductContext from "../ProductContext";

const greaterThan = " >20";

function Catagory() {
  const { handleFilter  } = useContext(ProductContext);
  return (
    <>
      <h2>Sort a product from the list</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick= {() => handleFilter("Price")}> {greaterThan}</button>
        <button onClick={() => handleFilter("Stationary")}>Stationary</button>
        <button onClick={() => handleFilter("Clothing")}>Clothing</button>
      </div>
    </>
  );
}

export default Catagory;
