import React from "react";

export const Product = ({ id, product }) => {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.productImage} className="card-img-top" alt={product.productName} />
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
