import DetailArticle from "@/components/detailArticle/DetailArticle";


const getPost = async (slug) => {

  const res = await fetch(`https://backend-blog-tau.vercel.app/api/article/${slug}`, {
    next: {
      revalidate: 10
    }
  });
  const respuesta = await res.json();
  return respuesta.item
}


const SingleArticle = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug)

  return (
    <main className="h-[100%] mt-[20px]">
      <DetailArticle post={ post } />
    </main>
  )
}

export default SingleArticle