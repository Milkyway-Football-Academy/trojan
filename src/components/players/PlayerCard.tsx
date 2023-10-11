import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

type PlayersPosition = 'forward' | 'defence' | 'midfield' | 'goalkeeper'

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
                <div className="flex flex-row items-baseline">
                    <div className="text-9xl md:text-[200px]">{firstLater}</div>
                    <div className="text-5xl">{rest}</div>
                </div>
            </div>
        </div>
    )
}

export const PlayerCard: React.FC<{slug: string, image: string, name: string, number: number}> = (props) => {
    return (
        <Link href={`/players/${props.slug}`}>
            <div className={classNames('h-[400px] flex flex-col justify-end w-full relative overflow-hidden md:rounded-lg')}>
                <div className="p-4 z-40 absolute text-white flex flex-col self-end">
                    <h1 className="text-5xl md:text-9xl ">{props.number}</h1>
                    <h1 className="text-3xl md:text-5xl uppercase">{props.name}</h1>
                </div>
                <Image src='/section-card-f.jpg' layout="fill" alt={`Milkyway football`} className="cover absolute top-0 left-0 w-full z-20" />
            </div>
        </Link>
    )
}
