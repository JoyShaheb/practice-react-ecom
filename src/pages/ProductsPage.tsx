import { useGetProductsQuery } from "../store/API/ProductsApi";
import { Link } from "react-router-dom";
import { Product } from "../types/index";

export const ProductsPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products?.map((product: Product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-2"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </Link>
      ))}
    </div>
  );
};
