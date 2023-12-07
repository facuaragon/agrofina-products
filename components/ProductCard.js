"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <>
      <Link href={`/products/${product.link}`}>
        <div className="hover:cursor-pointer relative">
          <div className=" opacity-0 hover:opacity-100 w-full h-full absolute bg-slate-600 bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center text-transparent hover:text-black">
            <div className="border-2 border-white text-white text-center text-lg px-4 py-2 backdrop-blur-sm ">
              Ver Producto
            </div>
          </div>
          <img src={`/products/${product.thumbnail}`} alt={product.name} />
        </div>
      </Link>
    </>
  );
}
