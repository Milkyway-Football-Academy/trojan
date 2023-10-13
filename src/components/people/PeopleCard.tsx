import React from "react";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";

export const PeopleCard: React.FC<{slug: string, image: string, name: string, title: string}> = (props) => {
    return (
        <Link href={`/people/${props.slug}`}>
            <div className={classNames(' hover:bg-black/30 transition-all delay-100 ease-in-out  h-[300px] md:h-[400px] flex flex-col justify-end w-full relative overflow-hidden md:rounded-lg')}>
                <div className="p-4 bg-black/40 uppercase w-full truncate z-40 absolute text-white flex flex-col self-end">
                    <h1 className="text-base md:text-xl underline ">{props.title}</h1>
                    <h1 className="text-lg md:text-2xl uppercase">{props.name}</h1>
                </div>
                <Image src={props.image} layout="fill" alt={`Milkyway football`} objectFit="cover" objectPosition="center" className="object-fit-cover absolute top-0 left-0 w-full z-20" />
            </div>
        </Link>
    )
}
