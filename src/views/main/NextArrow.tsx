import React from "react";

interface NextArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export default function NextArrow({ onClick }: NextArrowProps) {
    return <div className="next-arrow" onClick={onClick}>누르면 넘어감</div>;
}