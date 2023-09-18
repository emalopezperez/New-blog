"use client";

import { useState, useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";
import { formatID } from "@/helpers/formatId";

const Navigation = ({ markdown }) => {
  const [index, setIndex] = useState([]);

  useEffect(() => {
    const index = [];
    let currentH1 = null;
    let currentH2 = null;

    const parsedContent = markdown.split("\n").map((line) => line.trim());

    parsedContent.forEach((line) => {
      if (line.startsWith("# ")) {
        currentH1 = { nombre: line.replace(/^# /, ""), h2: [] };
        index.push(currentH1);
        currentH2 = null;
      } else if (line.startsWith("## ")) {
        if (currentH1) {
          currentH2 = { nombre: line.replace(/^## /, "") };
          currentH1.h2.push(currentH2);
        }
      }
    });

    setIndex(index);
  }, [markdown]);

  return (
    <nav className=" ">
      <h3 className="mb-6 text-2xl font-bold">Indice:</h3>
      {index.map((element, h1Index) => (
        <div key={h1Index} className="">
          <h2 className="text-md cursor-pointer w-[100%] hover:text-gray-500 ">
            <ScrollLink
              to={formatID(element.nombre)}
              smooth={true}
              duration={500}
              offset={-80}>
              {element.nombre}.
            </ScrollLink>
          </h2>
          <ul className="mt-2 space-y-2 border-l-2 border-slate-200 dark:border-slate-800 lg:mt-4 lg:space-y-6 pb-8">
            {element.h2.map((h2Element, h2Index) => {
              const formattedID = formatID(h2Element.nombre);

              return (
                <li
                  key={h2Index}
                  className="pl-5 cursor-pointer hover:text-gray-500">
                  <ScrollLink
                    to={formattedID}
                    smooth={true}
                    duration={500}
                    offset={-80}>
                    {h2Element.nombre}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
