import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
   const [products, setProducts] = useState<ProductFormatted[]>([]);
   const { addProduct, cart } = useCart();

   const cartItemsAmount = cart.reduce((sumAmount, product) => {
      let id = Number(product.id);
      let quantity = Number(product.amount);  
      let object = {
        [id] : quantity,
      }
      sumAmount = object;
      return sumAmount;

  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      api.get("products").then((response) => setProducts(response.data.products))
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    // TODO 
  }
 
  return (
    <ProductList> 
      {products.map((product) => (



))}

    </ProductList>
  );
};

export default Home;
