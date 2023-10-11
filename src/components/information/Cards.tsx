import React from "react";
import { LearnMoreBtn } from "@/components/homepage/Btn";
import classNames from "classnames";

type SectionType = "about" | "programs" | "coaches" | "partners";

interface SectionCardsProps {
    href: string;
    title: string;
    subtext: string;
    type: SectionType;

    className?: string
}

const overlayClasses: Record<SectionType, string> = {
    programs:
        "bg-gradient-to-r from-app-secondary via-50% to-transparent via-50% to-app-secondary flex flex-col h-full justify-center pl-64 absolute top-0 w-full",
    coaches:
        "bg-gradient-to-r from-app-primary via-10% to-transparent via-10%  to-app-primary flex flex-col h-full justify-center pl-64 absolute top-0 w-full",
    about:
        "bg-gradient-to-r from-black via-10% to-transparent via-10%  to-black flex flex-col h-full justify-center pl-64 absolute top-0 w-full",
    partners:
        "bg-gradient-to-r from-black via-10% to-transparent via-10%  to-black flex flex-col h-full justify-center pl-64 absolute top-0 w-full",
};


const imageSrc: Record<SectionType, string> = {
    coaches: "/section-card-f.jpg",
    programs: "/section-card-p.jpg",
    about: "/section-card-pl.jpg",
    partners: "/section-card-pl.jpg",
};

export const InfoCards: React.FC<SectionCardsProps> = ({
                                                              href,
                                                              subtext,
                                                              type,
                                                              title,
    className
                                                          }) => {

    return (
        <div className={classNames("relative min-h-[400px] hover:motion-safe:animate-pulse cursor-pointer", className)}>
            <div className="container py-16 text-white">
                <div className="flex flex-col w-full md:w-1/3">
                    <div className="z-40 flex flex-col space-y-5">
                        <h3 className="font-bold text-2xl md:text-7xl">{title}</h3>
                        <p className="font-Inter font-light text-base md:text-2xl">{`"${subtext}"`}</p>
                        <LearnMoreBtn textClass={`text-xl md:text-4xl`} href={href} label={`Learn More`}/>
                    </div>
                </div>
            </div>
            <div className={classNames(overlayClasses[type], 'z-20')}>
            </div>
            <img
                src={imageSrc[type]}
                className="absolute top-0 left-0 z-1 h-full w-full object-cover"
                alt={title}
            />
        </div>
    );
};
