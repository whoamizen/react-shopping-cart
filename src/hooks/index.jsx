import { useContext } from "react";
import { ShoppingCartContext } from "../context";

export const useShoppingCart = () => useContext(ShoppingCartContext);
