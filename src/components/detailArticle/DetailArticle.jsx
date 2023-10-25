import ContentMarkdown from "./components/Markdown";
import Navigation from "./components/Navigation";
import Image from "next/image";


const DetailArticle = ({ post }) => {
  const { titulo, imagen, markdown,  contenido } = post;

  console.log(post)

  return (
    <div className="w-full h-full">
      <header className="flex flex-col xl:flex-row flex-1 items-center gap-[50px] w-full">
        <div className="flex-1 pt-5">
          <div className="">
            <h3 className="xl:text-[40px]  text-2xl font-bold pb-8">
              {titulo}
            </h3>
          </div>
          <div className="flex pt-8 w-full justify-between pr-12">
            <div className="relative flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="detail"
                className="h-10 w-10  bg-gray-50 rounded-3xl"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold ">
                  <a href="/">
                    <span className="absolute inset-0" />
                    Emanuel Lopez
                  </a>
                </p>
                <p className="">Frontend</p>
              </div>
            </div>

            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2323" className="text-gray-500">
                12212
              </time>
              <a
                href="/"
                className="relative z-10 rounded-full bg-[#ffb04f45] px-3 py-1.5 font-medium  hover:bg-gray-100">
                Java
              </a>
            </div>
          </div>
        </div>

        <div className="h-[350px] flex-1 relative">
          <Image
            src={imagen}
            alt={titulo}
            className="object-fill rounded-xl"
            width={600}
            height={400}
            priority
          />
        </div>
      </header>

      <div className="xl:mt-[100px] md:mt-[80px] mb-[30px] xl:mb-[20px] mt-[20px] h-full  md:h-[100px] w-full">
        {contenido} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptas ullam non quidem accusamus omnis maiores numquam temporibus ea,
        amet eius, rem in eligendi? Provident, inventore ratione incidunt
        blanditiis ducimus cumque?
      </div>

      <section className="flex gap-10 relative ">
        <div className="w-full">
          <ContentMarkdown markdown={markdown} />
        </div>

        <div className="w-[30%] h-full lg:flex hidden">
          <Navigation markdown={markdown} />
        </div>
      </section>
    </div>
  );
};

export default DetailArticle;
