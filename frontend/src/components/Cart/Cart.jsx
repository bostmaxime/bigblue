import * as React from "react";

const Cart = (props) => {
  return (
    <div className="card w-50 m-4 pb-4">
      <h1 className="card-header">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            if (props.inCartProducts[product.id] > 0) {
              return (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{props.inCartProducts[product.id]}</td>
                  <td>{product.price}$</td>
                  <td>
                    <button
                      onClick={() => props.onRemoveFromCart(product.id)}
                      className="btn btn-outline-danger btn-sm"
                      >
                      -
                    </button>
                  </td>
                </tr>
              );
            } 
            else {
              return null;
            }
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center p-3 bg-light">
        <strong>Total</strong>
          <span>
            <strong>{props.products.reduce((total, product) => (
              total + props.inCartProducts[product.id] * product.price
              ), 0)}$
            </strong>
          </span>
      </div>
      <div>
        {props.products.reduce((total, product) => (
          total + props.inCartProducts[product.id] * product.price
          ), 0) > 0 ?
            (<button 
                type="button" 
                class="btn btn-lg btn-outline-success w-100"
                >Pay
            </button>) : null}
      </div>
    </div>
  );
};

export { Cart };

