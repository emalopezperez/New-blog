import Featured from "@/components/featured/Featured"
import CategoryList from "@/components/categoryList/CategoryList"
import CardList from "@/components/cardList/CardList"
import Aside from "@/components/aside/Aside"

export default function Home() {
  return (
    <main className=''>
      <Featured />
      <CategoryList />
      <section className=" mt-16 ">
        <CardList />
      </section>
    </main>
  )
}