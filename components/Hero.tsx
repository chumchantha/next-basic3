import getMovies from "@/libs/getMovies";
import Link from "next/link";

const Hero = async () => {
  const movies = await getMovies();

  const randomIndex = Math.floor(Math.random() * movies.length);

  const movie = movies[randomIndex];

  return (
    <div className="h-[35vw] w-full relative ">
      <div className="absolute left-[5%] bottom-[2%] w-[50%]">
        <h2 className="text-5xl font-bold pb-4">{movie.title}</h2>
        <p className="text-lg">{movie.description}</p>
        <button className="m-4 px-10 py-2 bg-black bg-opacity-60 rounded-md font-bold">
          Play
        </button>
      </div>
      <video autoPlay loop className="w-full object-cover h-[40vw]">
        <source
          // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.video_url}`}
          src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${movie.id}/${movie.video_url}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
