import { useShoppingCart } from "../hooks";
import dataProducts from "../data.json";

export default function ProductList() {
  const { products, addProduct } = useShoppingCart();

  const checkAvailableToAddCart = (productId) => {
    return Boolean(products.find((product) => product.id === productId));
  };

  return (
    <div className="w-full max-w-6xl px-4 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dataProducts.map((product) => (
        <div
          key={product.id}
          className="rounded-lg border bg-gray-400/10 flex flex-col h-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain bg-white mx-auto"
          />
          <div className="flex flex-col flex-grow gap-y-4 px-4 py-6">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm line-clamp-3">{product.description}</p>
            <span className="font-medium">$ {product.price}</span>
            <button
              className="bg-indigo-600 hover:bg-indigo-800 text-slate-200 mt-auto font-medium border rounded-lg px-4 py-2 disabled:bg-gray-200 disabled:text-gray-400 disabled:hover:bg-gray-200"
              onClick={() => addProduct(product)}
              disabled={checkAvailableToAddCart(product.id)}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
