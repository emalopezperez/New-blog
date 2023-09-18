import Image from "next/image";
import Link from "next/link";

const getHero = async () => {
  const res = await fetch(`https://backend-blog-tau.vercel.app/api/get-hero`, {
    cache: "no-store",
  });
  const respuesta = await res.json();
  return respuesta.item;
};

const Featured = async () => {
  const post = await getHero();

  const { imagen, contenido, titulo } = post;

  return (
    <div className="mt-[20px]">
      <h1 className="text-[16px]  md:text-[30px] xl:text-[60px]">
        <b>Programación y Tecnología:</b> artículos, apuntes y recursos
      </h1>
      <div className="mt-[15px] md:mt-[60px] xl:flex-row sm:flex-col  md:flex items-center gap-[50px] h-full justify-center">
        <div className="flex-1 md:flex h-full md:h-[370px] relative w-full ">
          <Image
            src={imagen}
            alt="blog"
            className="object-cover
            xl:h-full md:h-[400px] h-[250px]
            rounded-2xl
            w-full
            "
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="flex-1 flex-col gap-[20px] flex justify-center h-full md:h-[370px] ">
          <h2 className="text-[16px] md:text-[30px] pt-4 font-bold">
            {titulo}
          </h2>
          <p className="md:text-[18px] text:md">{contenido}</p>
          <Link
            href="/about"
            className="p-[10px] w-[max-content] rounded-md bg-[#ffb04f45] ">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
