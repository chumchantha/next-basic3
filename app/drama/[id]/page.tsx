import Link from "next/link";

const gotDrama = async (dramaId: any) => {
  const res = await fetch(
    // `http://127.0.0.1:8090/api/collections/movies/records/${dramaId}`
    `https://soydrama.pockethost.io/api/collections/movies/records/${dramaId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data;
};

const DramaPage = async ({ params }: any) => {
  const drama = await gotDrama(params.id);

  return (
    <div className="relative ">
      <Link href="/" className="absolute px-4 py-4 z-50">
        Back
      </Link>
      <h2 className="absolute text-xl py-8 pl-16">
        <span className="font-bold">Watching:</span> {drama.title}
      </h2>
      <video
        autoPlay
        loop
        controls
        className="w-full h-[47vw] object-cover"
        // style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <source
          // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${drama.id}/${drama?.stream}`}
          src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${drama.id}/${drama?.stream}`}
          type="video/mp4"
        />
      </video>

      {/* <iframe
        width="1519"
        height="500"
        src={`https://www.youtube.com/embed/${drama.url}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}

      <img
        className="w-full h-full object-cover"
        // src={`http://127.0.0.1:8090/api/files/6erqbp5koy8vlx9/${drama.id}/${drama.backdrop}`}
        src={`https://soydrama.pockethost.io/api/files/6erqbp5koy8vlx9/${drama.id}/${drama.backdrop}`}
        alt=""
      />
      <p>{drama.description}</p>
    </div>
  );
};

export default DramaPage;
