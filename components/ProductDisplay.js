"use client";

import { useState } from "react";

export default function ProductDisplay({ name, data }) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  if (typeof data === "string") {
    return (
      <>
        <div className="w-full border border-black ">
          <div
            onClick={handleClick}
            className="flex w-full justify-between px-2 border border-black"
          >
            <p>{name}</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
          </div>
          <div
            className={
              active
                ? "p-2 transition-height duration-300"
                : "px-2 max-h-0 overflow-hidden"
            }
          >
            {data}
          </div>
        </div>
      </>
    );
  } else if (Array.isArray(data)) {
    if (data.length > 0 && typeof data[0] === "string") {
      return (
        <div className="w-full border border-black ">
          <div
            onClick={handleClick}
            className="flex w-full justify-between px-2 border border-black"
          >
            <p>{name}</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
          </div>
          <div
            className={active ? "p-2 transition-all" : "h-0 overflow-hidden"}
          >
            {data.join(", ")}
          </div>
        </div>
      );
    } else if (data.length > 0 && typeof data[0] === "object") {
      return (
        <>
          <div className="w-full border border-black ">
            <div
              onClick={handleClick}
              className="flex w-full justify-between px-2 border border-black"
            >
              <p>{name}</p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </p>
            </div>
            <div
              className={
                active
                  ? "p-2 flex flex-col gap-2 transition-all"
                  : "h-0 overflow-hidden"
              }
            >
              {data.map((info, i) => (
                <div key={i}>
                  {info.nombre ? (
                    <p>
                      {info.nombre}: {info.datos}
                    </p>
                  ) : (
                    <p>{info.datos}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else {
      return <h1>No tengo esta opcion</h1>;
    }
  } else {
    return <h1>No tengo esta opcion</h1>;
  }
}
