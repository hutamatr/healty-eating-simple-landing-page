import React from "react";

import FruitsData from "../Content-Data/FruitsData";

const Main = () => {
  const fruits = FruitsData.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.id === "f-1" || fruit.id === "f-6" ? (
          <div
            className={`p-4 text-white flex flex-col gap-y-4 ${
              fruit.id === "f-1" ? "bg-[#37CCC4]" : "bg-[#478AC9]"
            }`}
          >
            <h3 className="font-Bodoni text-xl font-semibold">
              {fruit.content.title}
            </h3>
            <p>{fruit.content.desc}</p>
          </div>
        ) : (
          <img
            src={fruit.content.image}
            alt={`Fruits-${fruit.id}`}
            className={`${fruit.id === "f-2" ? "col-span-3" : ""}`}
          />
        )}
      </li>
    );
  });

  return (
    <main>
      <section className="container mx-auto px-4 my-6 md:max-w-4xl">
        <ul className="grid md:grid-rows-3 md:grid-flow-col md:gap-4 ">
          {fruits}
        </ul>
      </section>
    </main>
  );
};

export default Main;
