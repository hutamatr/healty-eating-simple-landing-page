import React, { Fragment } from "react";

import FruitsData from "../Content-Data/FruitsData";

const Main = () => {
  const fruits = FruitsData.map((fruit) => {
    return (
      <li
        key={fruit.id}
        className={`${
          fruit.id === "f-4" || fruit.id === "f-5" ? "span_two" : "span_one"
        } ${
          fruit.id === "f-1" || fruit.id === "f-6"
            ? `card_desc ${
                fruit.id === "f-1" ? "bg-[#37CCC4]" : "bg-[#478AC9]"
              }`
            : "hover:scale-95 duration-500 cursor-pointer"
        }`}
      >
        {fruit.id === "f-1" || fruit.id === "f-6" ? (
          <Fragment>
            <h3 className="text-2xl font-bold">{fruit.content.title}</h3>
            <p className="font-light leading-7">{fruit.content.desc}</p>
          </Fragment>
        ) : (
          <img
            src={fruit.content.image}
            alt={`Fruits-${fruit.id}`}
            className="w-full md:h-full hover:rounded-lg"
          />
        )}
      </li>
    );
  });

  return (
    <main>
      <section className="container px-4 mx-auto my-8 max-w-6xl md:px-8">
        <ul className="ul_grid">{fruits}</ul>
      </section>
    </main>
  );
};


export default Main;
