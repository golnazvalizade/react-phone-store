import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { ProductConsumer } from '../Context';

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;

  return (
    <ProductWrapped className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {value => (
            <div
              role="button"
              tabIndex="0"
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt={title} className="card-img-top" />
              </Link>
              <button
                type="button"
                className="cart-btn"
                disabled={inCart || false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0">in cart</p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span> {price}
          </h5>
        </div>
      </div>
    </ProductWrapped>
  );
};

Product.prototypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapped = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: #2e5339;
    border: none;
    color: #f3f3f3;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    transition: all 0.5s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: #ffccc9;
    cursor: pointer;
  }
`;

export default Product;
