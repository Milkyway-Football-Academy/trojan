import Image from "next/image";
import React from "react";
import classNames from "classnames";

interface PageHeroProps {
    image: string;
    title: string;

    className?: string
}

export const PageHero: React.FC<PageHeroProps> = ({ image, title, className }) => {
    return (
        <section className="relative">
            <div className={classNames("w-full h-[60vh] overflow-hidden z-10", className)}>
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className={classNames(
                "bg-gradient-to-r from-app-primary via-10% to-transparent via-10%  to-app-primary flex flex-col h-full justify-center pl-64 absolute top-0 w-full",
                 'z-20')}>
            </div>
        </section>
    );
};
