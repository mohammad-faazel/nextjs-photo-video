"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Pagination() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [page, setPage] = useState(1);

    const mines = page - 1;
    const plus = page + 1;

    return (
        <div className="join flex justify-center pt-10">
            <button
                type="button"
                className="btn join-item"
                onClick={() => {
                    setPage((page) => {
                        return mines;
                    });
                    router.push(
                        `${
                            searchParams.get("s")
                                ? `?${searchParams.get("s")}&page=${mines}`
                                : `?page=${mines}`
                        }`
                    );
                }}
                disabled={page == 1 ? true : false}
            >
                «
            </button>
            <button type="button" className="btn join-item">
                Page {searchParams.get("page") ?? 1}
            </button>
            <button
                type="button"
                className="btn join-item"
                onClick={() => {
                    setPage((page) => {
                        return plus;
                    });
                    router.push(
                        `${
                            searchParams.get("s")
                                ? `?s=${searchParams.get("s")}&page=${plus}`
                                : `?page=${plus}`
                        }`
                    );
                }}
            >
                »
            </button>
        </div>
    );
}
