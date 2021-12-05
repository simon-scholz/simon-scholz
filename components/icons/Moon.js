import React from "react";

function Moon({size}) {
    return (
        <svg
            className="moon-icon"
            xmlns="http://www.w3.org/2000/svg"
            width={size || "24"}
            height={size || "24"}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    );
}

export default Moon;


