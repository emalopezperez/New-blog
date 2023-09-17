const Featured = () => {
  return (
    <div className="mt-[20px]">
      <h1 className="text-[23px]  md:text-[30px] xl:text-[60px]">
        <b>Programación y Tecnología:</b> artículos, apuntes y recursos
      </h1>
      <div className="mt-[15px] md:mt-[60px] xl:flex-row sm:flex-col  md:flex items-center gap-[50px] h-full justify-center">
        <div className="flex-1 md:flex h-full md:h-[370px] relative w-full ">
          <img
            src="https://images.unsplash.com/photo-1687295656112-8b1d7509a5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
            fill
            className="object-cover
            h-full
            rounded-2xl
            "
          />
        </div>
        <div className="flex-1 flex-col gap-[20px] flex justify-center h-full md:h-[370px] ">
          <h1 className="text-[20px] md:text-[30px] pt-4 font-bold">
            Segundo titulo
          </h1>
          <p className="md:text-[18px] text:md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="p-[10px] w-[max-content] rounded-md bg-[#ffb04f45] ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
