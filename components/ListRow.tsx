import getMovies from "@/libs/getMovies";
import Link from "next/link";

const ListRow = async () => {
  const movies = await getMovies();

  return (
    <div className="flex flex-col relative">
      <h1 className="lg:text-2xl font-bold lg:py-2 px-8 md:text-sm md:py-1">
        KDrama
      </h1>
      <div className="whitespace-nowrap overflow-x-scroll no-scrollbar">
        {movies.map((movie) => {
          return (
            <Link
              href={`/drama/${movie.id}`}
              key={movie.id}
              className="w-[20%] h-[20%]  inline-block pr-1 md:w-[30%] md:h-[30%]"
            >
              <img
                className="rounded-md"
                // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.backdrop}`}
                // src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.backdrop}`}
                src={`https://pocketbase-next-basic3.up.railway.app/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.backdrop}`}
                alt="Poster"
                key={movie.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListRow;
