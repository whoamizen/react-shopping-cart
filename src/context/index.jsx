import { createContext, useCallback, useMemo, useState } from "react";

export const ShoppingCartContext = createContext({
  products: [],
  totalAmount: 0,
  addProduct: () => {},
  removeProduct: () => {},
  clearShoppingCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const totalAmount = useMemo(() => {
    return products.reduce((total, product) => total + product.price, 0);
  }, [products]);

  const addProduct = useCallback((product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  }, []);

  const removeProduct = useCallback((productId) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId);
    });
  }, []);

  const clearShoppingCart = useCallback(() => setProducts([]), []);

  return (
    <ShoppingCartContext.Provider
      value={{ products, totalAmount, addProduct, removeProduct, clearShoppingCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
