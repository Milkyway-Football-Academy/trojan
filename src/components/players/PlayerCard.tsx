import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {PlayersPosition} from "@/types";
import React from "react";


const PlayerPositionCardClassnames: Record<PlayersPosition, string> = {
    midfield: 'bg-app-primary text-white',
    forward: 'bg-blue-500 text-white',
    goalkeeper: 'bg-app-secondary text-white',
    defence: 'bg-black text-white',
}

interface PlayerCardGroupProps {
    positionGroup: PlayersPosition;
}
export const PlayerCardGroup: React.FC<PlayerCardGroupProps> = ({
    positionGroup
                                                      }) => {

    const indexedCardClass = PlayerPositionCardClassnames[positionGroup]
    const firstLater =  positionGroup.charAt(0).toUpperCase()
    const rest = positionGroup.slice(1, positionGroup.length)
    return (
        <div className={classNames(indexedCardClass, 'w-full')}>
            <div className="flex flex-row w-full h-full items-center justify-center">
                <div className="flex uppercase flex-row items-baseline">
                    <div className="text-9xl md:text-[200px]">{firstLater}</div>
                    <div className="text-5xl">{rest}</div>
                </div>
            </div>
        </div>
    )
}

export const PlayerCard: React.FC<{slug: string, image: string, name: string, number: number}> = (props) => {

    function numberParser (number:number): string | number {
        return number > 9 ? number : `0${number}`
    }
    return (
        <Link href={`/players/${props.slug}`}>
            <div className={classNames('h-[300px] md:h-[400px] flex flex-col justify-end w-full relative overflow-hidden md:rounded-lg')}>
                <div className="p-4 bg-black/40 uppercase w-full md:w-1/2 truncate z-40 absolute text-white flex flex-col self-end">
                    <h1 className="text-5xl md:text-9xl ">{numberParser(props.number)}</h1>
                    <h1 className="text-3xl md:text-4xl uppercase">{props.name}</h1>
                </div>
                <Image src={props.image} layout="fill" alt={`Milkyway football`} objectFit="cover" objectPosition="center" className="object-fit-cover absolute top-0 left-0 w-full z-20" />
            </div>
        </Link>
    )
}
