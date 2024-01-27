import getMovies from "@/libs/getMovies";
import Link from "next/link";

const ListRow = async () => {
  const movies = await getMovies();

  return (
    <div className="flex flex-col relative">
      <h1 className="text-2xl font-bold py-2 px-8">KDrama</h1>
      <div className="whitespace-nowrap overflow-x-scroll no-scrollbar">
        {movies.map((movie) => {
          return (
            <Link
              href={`/drama/${movie.id}`}
              key={movie.id}
              className="w-[20%] h-[20%]  inline-block pr-1"
            >
              <img
                className="rounded-md"
                // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.backdrop}`}
                src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.backdrop}`}
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
