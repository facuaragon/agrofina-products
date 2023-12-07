import ProductCard from "@/components/ProductCard";
import { products } from "@/products";
export default function Home() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 ">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
