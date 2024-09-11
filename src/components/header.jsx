import { useState } from "react";
import { ShoppingCartIcon } from "./icons";
import { useShoppingCart } from "../hooks";
import ShoppingCart from "./shopping-cart";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { products } = useShoppingCart();
  return (
    <header className="w-full bg-slate-900 sticky top-0">
      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-x-12 justify-between">
        <h1 className="font-semibold text-4xl text-white">Tienda</h1>
        <div className="relative flex items-center">
          <button
            className="hover:bg-slate-200/20 rounded-full p-2 text-white flex items-center gap-1"
            onClick={() => setShowCart(!showCart)}
          >
            <ShoppingCartIcon />
            <div className="bg-white p-1 text-xs text-gray-900 w-6 h-6 rounded-[50%]">
              <span>{products.length}</span>
            </div>
          </button>
          {showCart && (
            <div className="absolute top-12 right-0 w-max">
              <ShoppingCart />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
