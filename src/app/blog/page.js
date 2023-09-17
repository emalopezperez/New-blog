import Featured from "@/components/featured/Featured"
import CategoryList from "@/components/categoryList/CategoryList"
import CardList from "@/components/cardList/CardList"

export default function Blog({ searchParams }) {
  const { cat } = searchParams
  return (
    <main className=''>
      <CategoryList />
      <section className="flex gap-2 mt-16 flex-wrap">
        <CardList cat={ cat } />
      </section>
    </main>
  )
}
