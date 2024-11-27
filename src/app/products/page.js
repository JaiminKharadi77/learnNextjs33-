// import { cookies } from "next/headers";

export default async function ProductsPage() {
  const productsResponse = await fetch("http://localhost:3001/products");
  //   const detailsResponse = await fetch("http://localhost:3001/products/1");
  //   const details = await detailsResponse.json();
  const products = await productsResponse.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700 border-2 border-red-500"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          {/* <p>{details.title}</p> */}
        </li>
      ))}
    </ul>
  );
}