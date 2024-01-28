const getMovies = async () => {
  const res = await fetch(
    // "http://127.0.0.1:8090/api/collections/movies/records?sort=@random",
    // "https://soydrama.pockethost.io/api/collections/movies/records?sort=@random",
    "https://pocketbase-next-basic3.up.railway.app/api/collections/movies/records?sort=@random",
    { cache: "no-store" }
  );
  const data = await res.json();

  return data?.items as any[];
};

export default getMovies;
