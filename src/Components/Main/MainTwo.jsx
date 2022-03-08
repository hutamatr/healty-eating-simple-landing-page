import React from "react";

import FruitOne from "../../Assets/fruits-1.png";
import FruitTwo from "../../Assets/fruits-2.png";
import FruitThree from "../../Assets/fruits-3.png";
import FruitFour from "../../Assets/fruits-4.png";
import FruitFive from "../../Assets/fruits-5.png";
import FruitSix from "../../Assets/fruits-6.png";

const MainTwo = () => {
  return (
    <main>
      <section className="container px-4 mx-auto">
        <ul className="grid gap-4 mx-auto grid-cols-1 grid-rows-1 max-w-5xl md:grid-flow-col md:grid-cols-3 md:grid-rows-6">
          <li className="col-span-1 row-span-2">
            <h3>Raw Fruits</h3>
            <p>
              Raw fruits are those which are not ripe properly. But it also
              contains many different nutrition. The raw food diet encourages
              people to eat only raw (never heated), unprocessed foods. While
              eating more produce is advantageous, experts say there’s no reason
              to avoid cooking it.
            </p>
          </li>
          <li className="col-span-1 row-span-2">
            <img src={FruitOne} alt="" className="w-full md:h-full" />
          </li>
          <li className="col-span-1 row-span-2">
            <img src={FruitTwo} alt="" className="w-full md:h-full" />
          </li>
          <li className="col-span-1 row-span-3">
            <img src={FruitThree} alt="" className="w-full md:h-full" />
          </li>
          <li className="col-span-1 row-span-3">
            <img src={FruitFour} alt="" className="w-full md:h-full" />
          </li>
          <li className="col-span-1 row-span-2">
            <h3>Fruit Diet</h3>
            <p>
              The fruitarian, or fruit, diet is a highly restrictive vegan diet.
              It excludes all animal products, including dairy. People following
              this program eat a diet consisting primarily of raw fruits.
              Vegetables, dried fruits, nuts, and seeds can also be eaten in
              moderation.
            </p>
          </li>
          <li className="col-span-1 row-span-2">
            <img src={FruitFive} alt="" className="w-full md:h-full" />
          </li>
          <li className="col-span-1 row-span-2">
            <img src={FruitSix} alt="" className="w-full md:h-full" />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainTwo;
