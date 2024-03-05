"use client";
import favorites from "@/appData/recoilStore/favorites";
import React from "react";
import { useRecoilState } from "recoil";

type Props = { movieId: string };
export default function FavoriteBtn(props: Props) {
    const { movieId } = props;

    const [favorite, setFavorite] = useRecoilState(favorites);

    const isFavorite = favorite.includes(movieId);

    const addFavorite = () => {
        setFavorite([...favorite, movieId]);
    };

    const removeFavorite = () => {
        const newAction = favorite.filter((id) => id !== movieId);
        setFavorite(newAction);
    };

    const handleFavorite = () => {
        isFavorite ? removeFavorite() : addFavorite();
    };

    return (
        <button
            type="button"
            title="Add to Favorite"
            className="btn btn-accent text-green-950 btn-sm mt-2 self-start"
            onClick={handleFavorite}
        >
            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
    );
}
