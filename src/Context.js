import React, { Component, createContext } from 'react';

import { storeProducts, detailProduct } from './data';

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProduct();
  }

  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const singleProduct = { ...item };
      tempProduct = [...tempProduct, singleProduct];
    });
    this.setState({ products: tempProduct });
  };

  getItem = id => {
    const { products } = this.state;
    const product = products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = id => {
    const { products, cart } = this.state;
    const tempProducts = [...products];
    const index = tempProducts.indexOf(this.getItem(id));
    // console.log(index);
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const { price } = product;
    product.total = price;
    this.setState(
      {
        products: tempProducts,
        cart: [...cart, product]
      },
      () => {
        this.addTotals();
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = id => {
    const { cart } = this.state;
    const tempCart = [...cart];
    const selectProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];
    product.total = product.count * product.price;
    product.count += 1;

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    const { cart } = this.state;
    const tempCart = [...cart];
    const selectProduct = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];
    product.count -= 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    const { products, cart } = this.state;
    const tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    const removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.total = 0;
    removeProduct.count = 0;

    this.setState(
      () => {
        return {
          products: [...tempProducts],
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    const { cart } = this.state;
    cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseInt(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    const { children } = this.props;
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
