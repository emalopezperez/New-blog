import PopularPosts from "./components/PopularPosts";
import Newsletter from "./components/Newsletter";
import Networking from "./components/Networking";

const Aside = () => {
  return (
    <aside className="w-full h-full ">
      <div className="xl:text-xl font-bold  text-gray-900 text-sm ">
          <h2 className="inline sm:block">Articulo destacado</h2>
        </div>
      <PopularPosts />
      <Newsletter />
      <Networking/>
    </aside>
  );
};

export default Aside;
