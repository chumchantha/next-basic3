import getMovies from "@/libs/getMovies";
import Link from "next/link";

const Hero = async () => {
  const movies = await getMovies();

  const randomIndex = Math.floor(Math.random() * movies.length);

  const movie = movies[randomIndex];

  return (
    <div className="lg:h-[35vw] w-full relative md:h-[40vw] ">
      <div className="absolute left-[5%] bottom-[2%] w-[50%]">
        <h2 className="lg:text-5xl font-bold lg:pb-4 md:text-base md:pb-1">
          {movie.title}
        </h2>
        <p className="lg:text-lg md:text-xs">{movie.description}</p>
        <button className="lg:m-4 lg:px-10 lg:py-2 bg-black bg-opacity-60 rounded-md font-bold md:px-6 md:py-1 md:text-[10px] md:m-2 lg:text-sm">
          Play
        </button>
      </div>
      <video
        loop
        autoPlay
        muted
        className="w-full object-cover lg:h-[40vw] md:h-[50vw]"
      >
        <source
          // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.video_url}`}
          // src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.video_url}`}
          src={`https://pocketbase-next-basic3.up.railway.app/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.video_url}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
