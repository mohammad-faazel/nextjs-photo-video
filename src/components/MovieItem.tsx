import React from "react";

type Props = { item: string; title: string };
export default function MovieItem(props: Props) {
    const { title, item } = props;

    return (
        <p>
            <b>{title}:</b> {item}
        </p>
    );
}
