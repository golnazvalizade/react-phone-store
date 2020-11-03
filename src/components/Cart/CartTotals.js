import React from 'react';

import { Link } from 'react-router-dom';

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = value;
  const emptyCart = cart.length === 0;

  return (
    <>
      {!emptyCart && (
        <div className="card text-center">
          <div className="card-body">
            <div className="col-12 text-capitalize text-center">
              <h5>
                <span className="text-title"> subtotal :</span>{' '}
                <strong>$ {cartSubTotal} </strong>
              </h5>
              <h5>
                <span className="text-title"> tax :</span>{' '}
                <strong>$ {cartTax} </strong>
              </h5>
              <h5 className="mb-3">
                <span className="text-title "> total :</span>{' '}
                <strong>$ {cartTotal} </strong>
              </h5>
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase  px-5"
                  type="button"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  clear cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartTotals;
