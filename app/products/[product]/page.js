"use client";
import { useSearchParams, useParams } from "next/navigation";
import { products } from "@/products";
import Link from "next/link";
export default function Product() {
  const params = useParams();
  const { product: link } = params;
  const product = products.find((product) => product.link === link);
  return (
    <>
      <div className=" flex w-full">
        <div className=" flex flex-col w-4/6">
          <h1>{product.nombre}</h1>
          {product.categoria && (
            <p className="mt-6">
              Categoría de producto:{" "}
              <Link href="" className=" capitalize text-agrofina">
                {product.categoria}
              </Link>
            </p>
          )}
          {product.principioActivo && (
            <p>Principio Activo: {`${product.principioActivo}`}</p>
          )}
          {product.formulacion && (
            <p className="mb-5">Formulacion: {`${product.formulacion}`}</p>
          )}
          {product.descripcion && (
            <p className="whitespace-pre-line">{product.descripcion}</p>
          )}
          {/* {product.accion&&} */}
          {product.accion && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Acción</p>
                <p>Icon</p>
              </div>
              <div className="p-2">{product.accion}</div>
            </div>
          )}
          {product.mecanismoDeAccion && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Mecanismo de Acción</p>
                <p>Icon</p>
              </div>
              <div className="p-2">{product.mecanismoDeAccion}</div>
            </div>
          )}
          {!!product.malezas.length && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Malezas</p>
                <p>Icon</p>
              </div>
              <div className="p-2 flex flex-col gap-2">
                {product.malezas.map((maleza, i) => (
                  <div key={i}>
                    {maleza.nombre ? (
                      <p>
                        {maleza.nombre}: {maleza.datos}
                      </p>
                    ) : (
                      <p>{maleza.datos}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {product.enfermedades && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Enfermedades</p>
                <p>Icon</p>
              </div>
              <div className="p-2">{product.enfermedades}</div>
            </div>
          )}
          {product.plagas && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Plagas</p>
                <p>Icon</p>
              </div>
              <div className="p-2">{product.plagas}</div>
            </div>
          )}
          {!!product.cultivos.length && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Cultivos</p>
                <p>Icon</p>
              </div>
              <div className="p-2">{product.cultivos.join(", ")}</div>
            </div>
          )}
          {!!product.dosis.length && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Dosis</p>
                <p>Icon</p>
              </div>
              <div className="p-2 flex flex-col gap-2">
                {product.dosis.map((dosis, i) => (
                  <div key={i}>
                    {dosis.nombre ? (
                      <p>
                        {dosis.nombre}: {dosis.datos}
                      </p>
                    ) : (
                      <p>{dosis.datos}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {product.recomendacionesDeUso && (
            <div className="w-full border border-black ">
              <div className="flex w-full justify-between px-2 border border-black">
                <p>Recomendaciones de Uso</p>
                <p>Icon</p>
              </div>
              <div className="p-2 whitespace-pre-line">
                {product.recomendacionesDeUso}
              </div>
            </div>
          )}
        </div>
        <div className=" w-1/3 px-20">
          <img src={`/products/${product.imagen}`} />
        </div>
      </div>
    </>
  );
}
