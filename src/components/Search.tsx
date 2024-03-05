"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

export default function Search(props: Props) {
    const router = useRouter();
    const [search, setSearch] = useState("people");

    return (
        <form
            className="mb-10 flex rounded-full border px-5 py-2"
            onSubmit={(e) => {
                e.preventDefault();
                router.push(`?s=${search}&page=1`);
            }}
        >
            <input
                type="text"
                placeholder="Search movie ..."
                className="flex-1 focus-within:outline-none"
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                }}
            />
            <button
                type="submit"
                className="btn btn-info rounded-full md:px-10 text-white"
            >
                Search
            </button>
        </form>
    );
}
