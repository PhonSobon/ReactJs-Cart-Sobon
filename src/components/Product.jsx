import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={product.image} alt={product.title} className="card-img-top rounded mx-auto d-block" style={{ height: '200px', width: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Add to cart
          </button>
          <button type="button" className="btn btn-sm btn-primary">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;



