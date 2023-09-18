export default function Newsletter() {
  return (
    <div className="mt-8 ">
      <div className="mx-auto">
        <div className="xl:text-[17px] text-sm  font-semibold leading-6" >
          <h2 className="inline sm:block">!Suscríbete a la newsletter!</h2>
        </div>
        <form className="mt-5">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              placeholder="Correo electronico"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm "
            >
              Suscríbete
            </button>
          </div>
          
        </form>
      </div>
    </div>
  )
}