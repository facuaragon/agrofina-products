"use client";
import { useSearchParams, useParams } from "next/navigation";
import { products } from "@/products";
import Link from "next/link";
import ProductDisplay from "@/components/ProductDisplay";
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
          {product.accion && (
            <ProductDisplay name={"Acción"} data={product.accion} />
          )}
          {product.mecanismoDeAccion && (
            <ProductDisplay
              name={"Mecanismo de Acción"}
              data={product.mecanismoDeAccion}
            />
          )}
          {!!product.malezas.length && (
            <ProductDisplay name={"Malezas"} data={product.malezas} />
          )}
          {product.enfermedades && (
            <ProductDisplay name={"Enfermedades"} data={product.enfermedades} />
          )}
          {product.plagas && (
            <ProductDisplay name={"Plagas"} data={product.plagas} />
          )}
          {!!product.cultivos.length && (
            <ProductDisplay name={"Cultivos"} data={product.cultivos} />
          )}
          {!!product.dosis.length && (
            <ProductDisplay name={"Dosis"} data={product.dosis} />
          )}
          {product.recomendacionesDeUso && (
            <ProductDisplay
              name={"Recomendaciones de Uso"}
              data={product.recomendacionesDeUso}
            />
          )}
          {product.bandaToxicologica && (
            <ProductDisplay
              name={"Banda Toxicológica"}
              data={product.bandaToxicologica}
            />
          )}
        </div>
        <div className=" w-1/3 px-20">
          <img src={`/products/${product.imagen}`} />
          {product.descargas?.marbete && (
            <div>
              <a
                href={`/products/${product.descargas.marbete}`}
                target="_blank"
              >
                <b>Descargar </b>Marbete
              </a>
            </div>
          )}
          {product.descargas?.hojaDeDatosDeSeguridad && (
            <div>
              <a
                href={`/products/${product.descargas.hojaDeDatosDeSeguridad}`}
                target="_blank"
              >
                <b>Descargar </b>Hoja de Datos de Seguridad (MSDS)
              </a>
            </div>
          )}
          {product.descargas?.flyerComercial && (
            <div>
              <a
                href={`/products/${product.descargas.flyerComercial}`}
                target="_blank"
              >
                <b>Descargar </b>Flyer Comercial
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
