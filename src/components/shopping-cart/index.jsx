import { useShoppingCart } from "../../hooks";
import { TrashIcon } from "../icons";
import EmptyShoppingCart from "./empty-shopping-cart";

export default function ShoppingCart() {
  const { products, removeProduct, totalAmount, clearShoppingCart } =
    useShoppingCart();

  if (products.length === 0) return <EmptyShoppingCart />;

  return (
    <div className="bg-white p-4 rounded-lg border shadow-lg">
      <div className="grid gap-y-3 py-3">
        {products.map((product) => (
          <div key={product.id} className="flex gap-x-4 items-center">
            <img src={product.image} alt={product.name} className="w-12" />
            <h5 className="w-32 text-ellipsis truncate font-medium">
              {product.name}
            </h5>
            <span className="ml-auto">$ {product.price}</span>
            <div>
              <button
                className="bg-red-600 hover:bg-red-800 text-white hover:text-slate-200 rounded-full p-2"
                onClick={() => removeProduct(product.id)}
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-2 border-t">
        <span className="font-medium text-xl">Total:</span>
        <span className="font-medium text-xl">$ {totalAmount}</span>
      </div>
      <button
        className="w-full bg-gray-900 text-white px-4 py-2 mt-2 rounded-lg hover:bg-gray-800"
        onClick={clearShoppingCart}
      >
        Vaciar carrito
      </button>
    </div>
  );
}
