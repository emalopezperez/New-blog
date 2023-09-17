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
  {
    link: "",
    name: "Css",
    img: "",
    background: "#7fb88133",
  },
  {
    link: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
    name: "Next",
    img: "",
    background: "#ff795736",
  },
  {
    link: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
    name: "Tailwind",
    img: "",
    background: "#ffb04f45",
  },
  {
    link: "",
    name: "Linux",
    img: "",
    background: "#5e4fff31",
  },
  {
    link: "",
    name: "Ciberseguridad",
    img: "",
    background: "#ff295736",
  },
];

const CategoryList = () => {
  return (
    <div className="mt-[30px] flex flex-col gap-8 h-full">
      <h1 className="font-bold">Categorias</h1>
      <div className="w-full h-full flex flex-col md:flex-row gap-3 xl:justify-between flex-wrap">
        {links.map(({ link, img, name, background }, index) => (
          <Link href={link} key={index} className="">
            <div
              className={`bg-${background} flex gap-3 items-center w-full py-3 px-5 rounded-md`}
              style={{ background }}>
              <img
                src={img}
                alt=""
                className="h-[22px] w-[22px] rounded-[50%]"
              />
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
