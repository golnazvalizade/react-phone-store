import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = () => {
  return (
    <section className="container-fluid mt-5">
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </>
            );
          }
          return <EmptyCart />;
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
