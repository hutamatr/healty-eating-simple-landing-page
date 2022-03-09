import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container mx-auto text-center my-8 flex flex-col gap-y-4 px-4 justify-center items-center">
        <h2 className="font-extralight text-xl tracking-[.25em]">
          HEALTHY EATING
        </h2>
        <h1 className="font-Bodoni text-transparent text-5xl font-bold bg-gradient-to-r from-[#37CCC4] to-[#478AC9] max-w-fit bg-clip-text">
          All About Fruits
        </h1>
      </section>
    </header>
  );
};

export default Header;
