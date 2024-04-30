import * as React from "react";
import "./index.css";

const Shop = (props) => {
  return (
    <div className="card m-4 w-50 pb-4">
      <h1 className="card-header">Shop</h1>
      <div className="d-flex justify-content-between flex-wrap">
        {props.products.map((product) => (
          <div className="col-md-4 mt-4" key={product.id}>
            <div className="card">
              <div className="card-img-container">
                <img
                  className="card-img-top h-100 w-100"
                  src={product.image_url}
                  alt={product.name}
                />
              </div>
              <div className="card-body">
                <span className="card-title"><strong>{product.name}</strong></span>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{product.price}$</span>
                    <span className={`badge rounded-pill text-white ${
                      props.availableProducts[product.id] > 2 ?'bg-success' :
                      props.availableProducts[product.id] === 0 ? 'bg-secondary' :
                      'bg-danger'
                    }`}
                    >
                    {props.availableProducts[product.id]} remaining
                    </span>
                  </div>
                <div className="d-grid">
                  <button
                    onClick={() => props.onAddToCart(product.id)}
                    className={`btn w-100 ${
                      props.availableProducts[product.id] > 2 ? 'btn-outline-success' :
                      props.availableProducts[product.id] === 0 ? 'btn-outline-secondary' :
                      'btn-outline-danger'
                  }`}
                  >
                    {
                    props.availableProducts[product.id] > 0 ? 'Add to cart' :
                    'Out of stock'
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Shop };
