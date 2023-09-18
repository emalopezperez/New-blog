import Image from "next/image";
import Link from "next/link";

export const getLastPost = async () => {
  const apiUrl = "https://backend-blog-tau.vercel.app/api/articles";
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  const respuesta = await res.json();
  const sortedPosts = respuesta.items.sort(
    (a, b) => new Date(a.fecha) - new Date(b.fecha)
  );
  const lastPost = sortedPosts[0];
  return lastPost;
};


const PopularPosts = async () => {
  const post = await getLastPost()
  const { imagen, contenido, titulo, _id } = post;
  return (
    <Link href={ `/single_article/${_id}` } className="flex flex-col gap-2 mt-6 cursor-pointer">
      <Image src={ imagen } width={ 200 } height={ 300 } alt={ titulo } className="object-cover rounded-xl w-full" priority />
      <div className="xl:text-xl  text-sm ">
        <h2 className="inline sm:block font-semibold text-[16px]">{ titulo }</h2>
      </div>
      <p className="leading-6 text-[14px]">
        { contenido } Lorem ipsum dolor sit amet consectetur adipisicing eli.!</p>
    </Link>
  );
};

export default PopularPosts;
