import baseUrl from "@/appData/baseUrl";
import FavoriteBtn from "@/components/FavoriteBtn";
import MovieItem from "@/components/MovieItem";
import { VideoParams } from "@/types";
import Link from "next/link";
import React from "react";

type Props = VideoParams;
export default async function Video(props: Props) {
    const {
        params: { id },
    } = props;

    const data = await fetch(`${baseUrl}i=${id}`);
    const video = await data.json();

    const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Awards,
        Poster,
        Ratings,
        Metascore,
        imdbRating,
        imdbVotes,
        imdbID,
        Type,
        DVD,
        BoxOffice,
        Production,
        Website,
        Response,
    } = video;

    return (
        <div className="max-w-5xl mx-5 lg:mx-auto my-10 px-5 border rounded-3xl shadow-2xl bg-gray-100 p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 sm:gap-10">
                <figure className="col-span-1">
                    <img src={Poster} alt={Title} className="w-full" />
                </figure>
                <div className="col-span-2 flex flex-col gap-1">
                    <MovieItem title="Title" item={Title} />
                    <MovieItem title="Year" item={Year} />
                    <MovieItem title="Rated" item={Rated} />
                    <MovieItem title="Released" item={Released} />
                    <MovieItem title="Runtime" item={Runtime} />
                    <MovieItem title="Genre" item={Genre} />
                    <MovieItem title="Director" item={Director} />
                    <MovieItem title="Writer" item={Writer} />
                    <MovieItem title="Actors" item={Actors} />
                    <MovieItem title="Language" item={Language} />
                    <MovieItem title="Country" item={Country} />
                    <MovieItem title="Awards" item={Awards} />
                    <MovieItem title="imdbRating" item={`${imdbRating} / 10`} />
                    <MovieItem title="imdbVotes" item={imdbVotes} />
                    <FavoriteBtn movieId={imdbID} />
                </div>
            </div>
            <div className="pt-10">
                <MovieItem title="Plot" item={Plot} />
                <Link href="/" className="btn btn-primary mt-10">
                    Go to Home
                </Link>
            </div>
        </div>
    );
}
