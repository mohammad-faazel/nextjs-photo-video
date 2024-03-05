import { type ReactNode } from "react";

export type Children = { children: ReactNode };

export type VideoParams = { params: { id: number } };

export type SearchParams = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export type Videos = {
    Search: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }[];
    totalResults: string;
    Response: string;
};
