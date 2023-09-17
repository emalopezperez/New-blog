"use client";

import Link from "next/link";
import { formatDate } from "@/helpers/formatDate";

const Card = ({ post }) => {
  const { _id, titulo, autor, contenido, fecha, imagen, categoria } = post;

  const date = formatDate(fecha);

  return (
    <Link
      href={`/single_article/${_id}`}
      key={_id}
      className="relative isolate flex flex-col gap-4 xl:gap-12 lg:flex-row items-center">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square xl:w-[280px] md:w-[280px] w-full lg:shrink-0">
        <img
          src={imagen}
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {date}
          </time>
          <a className="relative z-10 rounded-full bg-[#ffb04f45] px-3 py-1.5 font-medium  hover:bg-gray-100">
            {categoria}
          </a>
        </div>
        <div className="group relative xl:max-w-xl w-full">
          <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
            <span className="absolute inset-0" />
            {titulo}
          </h3>
          <p className="mt-5 text-sm leading-6 ">
            {contenido}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur in, fugiat omnis, sit aut aperiam sint quas pariatur
            eum, tempora obcaecati alias dolorem veniam recusandae porro nam
            cupiditate vitae ea?
          </p>
        </div>
        <div className="xl:mt-6 mt-0 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            <img
              src="https://previews.123rf.com/images/mirquurius/mirquurius1912/mirquurius191200011/136127599-lindo-astronauta-mantiene-un-globo-como-moon-mano-dibujado-style-espacio-vector.jpg"
              alt=""
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold ">
                <span className="absolute inset-0" />
                {autor} Lopez
              </p>
              <p className="">Frontend</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
