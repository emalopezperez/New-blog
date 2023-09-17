import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

export const getPosts = async (cat) => {
  const apiUrl = "https://backend-blog-tau.vercel.app/api/articles";

  const url = cat ? `${apiUrl}/${cat}` : apiUrl;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const respuesta = await res.json();
  return respuesta.items;
};

const CardList = async ({ cat }) => {
  const data = await getPosts(cat);

  return (
    <main className="w-full">
      <div className="mx-auto mb-[30px]">
        <div className="">
          {cat ? (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl pb-10">
              <span>{data[0].categoria}</span>
            </h2>
          ) : (
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl pb-10">
              Ultimos articulos
            </h2>
          )}

          <section className="space-y-12 lg:mt-15 lg:space-y-10 flex justify-between flex-wrap">
            {data?.map((post) => (
              <Card key={post._id} post={post} />
            ))}
          </section>
        </div>
      </div>

      <div className="mt-20">
        <Pagination/>
      </div>
    </main>
  );
};

export default CardList;
