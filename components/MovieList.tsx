import getMovies from "@/libs/getMovies";
import Link from "next/link";

const MovieList = async () => {
  const movies = await getMovies();

  return (
    <div className="flex flex-col relative w-full h-full object-cover">
      <h1 className="lg:text-2xl font-bold py-2 px-8 md:text-sm">KDrama</h1>
      <div className="whitespace-nowrap overflow-x-scroll no-scrollbar object-cover">
        {movies.map((movie) => {
          return (
            <Link
              href={`/drama/${movie.id}`}
              key={movie.id}
              className="w-[15%] h-[15%]  inline-block pr-1 object-cover md:w-[25%] md:h-[25%]"
            >
              <img
                className="rounded-md w-full h-full object-cover"
                // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.poster}`}
                // src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.poster}`}
                src={`https://pocketbase-next-basic3.up.railway.app/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.poster}`}
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

export default MovieList;
