import AsideCategory from "./components/AsideCategory";
import PopularPosts from "./components/PopularPosts";

const Aside = () => {
  return (
    <aside className="w-full ">
      <h2 className=""></h2>
      <h1 className="">Most Popular</h1>
      <PopularPosts />
      <h2 className="">Discover by topic</h2>
      <h1 className="">Categories</h1>
      <AsideCategory />
      <h2 className="">Chosen by the editor</h2>
      <h1 className="">Editors Pick</h1>
      <div>editores</div>
    </aside>
  );
};

export default Aside;
