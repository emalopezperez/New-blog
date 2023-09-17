import Link from "next/link"

const data = [
  {
    title:""
  }
]

const AsideCategory = () => {
  return (
    <div className="">
      <h1 className="">Popular Categories</h1>
      <div className="">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className=""
            key={item._id}
          >
            {item.img && (
              <img
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AsideCategory