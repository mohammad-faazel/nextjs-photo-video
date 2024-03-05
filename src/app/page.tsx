import baseUrl from "@/appData/baseUrl";
import CardMovie from "@/components/CardMovie";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { SearchParams, Videos } from "@/types";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = SearchParams;
export default async function HomePage(props: Props) {
    const { searchParams } = props;

    const search = searchParams.s || "last";

    const data = await fetch(`${baseUrl}s=${search}&page=${searchParams.page}`);

    const videos: Videos = await data.json();

    if (!videos.Search) {
        return notFound();
    }

    return (
        <main className="mx-auto max-w-6xl py-20 px-5">
            <Search />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                {videos.Search.map((video) => (
                    <CardMovie {...video} />
                ))}
            </div>

            <Pagination />
        </main>
    );
}
