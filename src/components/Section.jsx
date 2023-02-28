

const Section = ({author, phrase, other}) => {
  return (
    <div className="flex flex-col items-center min-h-screen static">
      <h1 className="text-5xl font-bold text-white md:my-32 text-4xl my-14 md:text-6xl">
        INFOGALAX
      </h1>
      <div className="flex flex-col justify-center rounded-3xl w-11/12 h-72 gradiente p-4 text-2xl md:w-7/12">
          <span className="text-black">
           {phrase}
          </span>
      </div>
      <button onClick={other} className="flex justify-center mt-8 md:hover:opacity-80 active:opacity-80">
        <i className="fa-solid fa-arrow-rotate-right text-3xl h-12 w-12
                  flex flex-col justify-center rounded-3xl text-black bg-white">
        </i>
      </button>
      <div className="font-mono absolute bottom-0 md:text-xl font-bold md:inset-x-72 md:h-72 inset-x-12 h-1/4 rounded-tr-full rounded-tl-full flex flex-col justify-end pb-4 bg-white opacity-20 a"
      >
      </div>
      <div className="text-white-500 absolute bottom-2 md:text-2xl">"Fuente: {author}"</div>
    </div>
  )
}

export default Section