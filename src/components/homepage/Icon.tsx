import React, {memo} from "react";

 const _KiteIcon: React.FC<{initials: string,   size?: string}> = ({ initials, size }) => {
    const colors = ['bg-yellow-500', 'bg-blue-500', 'bg-gray-300', 'bg-yellow-500', 'bg-black-500', 'bg-purple-500'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div
            className={` ${size ?? 'w-16 h-16 text-5xl '} ${randomColor} relative transform -skew-y-6 flex justify-center items-center text-white`}
        >
            {initials}
        </div>
    );
};

 export const KiteIcon = memo<any>(_KiteIcon)
