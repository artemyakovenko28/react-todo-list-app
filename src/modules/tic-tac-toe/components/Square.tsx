import React from "react";
import '../index.css';

type Props = {
    index: number
    value: string
    onClick: (i: number) => void
};

export const Square = ({index, value, onClick}: Props) => {
    return (
        <button className="square"
                onClick={() => onClick(index)}>
            {value}
        </button>
    );
};
