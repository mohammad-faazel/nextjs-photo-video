import Link from "next/link";
import React from "react";

type Props = {
    Poster: string;
    imdbID: string;
    Title: string;
    Type: string;
    Year: string;
};
export default function CardMovie(props: Props) {
    const { Poster, imdbID, Title, Type, Year } = props;
    return (
        <Link
            href={`/video/${imdbID}`}
            className="card w-full bg-base-100 shadow-2xl"
        >
            <figure>
                <img src={Poster} alt={Title} className="w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mb-5">{Title}</h2>
                <div className="card-actions justify-end mt-auto">
                    <div className="badge badge-outline">{Type}</div>
                    <div className="badge badge-outline">{Year}</div>
                </div>
            </div>
        </Link>
    );
}
