import Link from "next/link";

const links = [
  {
    link: "/",
    name: "All",
    img: "",
    background: "#ff795736",
  },
  {
    link: "/blog?cat=javascript",
    name: "JavaScript",
    img: "",
    background: "#57c4ff31",
  },
  {
    link: "/blog?cat=react",
    name: "React",
    img: "",
    background: "#da85c731",
  },
];

const CategoryList = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-8 h-full ">
      <h3 className="font-bold text-[16px] md:text-[22px]">Categorias</h3>
      <div className="w-full h-full flex flex-col md:flex-row gap-3 xl:justify-between flex-wrap max-w-[900px] md:max-w-[400px]">
        {links.map(({ link, img, name, background }, index) => (
          <Link href={link} key={index} className="hover:bg-black/10 rounded-md">
            <div
              className={`bg-${background}  flex gap-3 items-center w-full py-3 px-5 rounded-md`}
              style={{ background }}>
              <div className="h-[22px] w-[22px] rounded-md border border-gray-500 "></div>
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
