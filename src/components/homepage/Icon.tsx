import React from "react";

export const KiteIcon: React.FC<{initials: string}> = ({ initials }) => {
    const colors = ['bg-yellow-500', 'bg-blue-500', 'bg-gray-300', 'bg-yellow-500', 'bg-black-500', 'bg-purple-500'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div
            className={`w-16 h-16 ${randomColor} text-5xl relative transform -skew-y-6 flex justify-center items-center text-white`}
        >
            {initials}
        </div>
    );
};
