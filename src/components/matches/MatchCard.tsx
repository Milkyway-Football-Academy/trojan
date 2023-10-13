import React from "react";
import {MatchesEntry} from "@/types";
import Image from "next/image";
import Logo from "@/assets/PNG/black.png";
import {KiteIcon} from "@/components/homepage/Icon";
import {getFirstLetters} from "../../../utils/getIntials";
import moment from "moment";

export const MatchCard: React.FC<{match: MatchesEntry}> = ({match}) => {
    const date = moment(match.timeAndDate)
    return (
        <div className="bg-white flex w-full rounded-lg">
            <div className="container py-4">
                <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4">
                            <div className="flex flex-row items-center space-x-2">
                                <Image src={Logo} width={24} height={24} alt="Milkyway academy"/>
                                <h1 className="text-gray-400 text-4xl">Milkyway Academy</h1>
                            </div>
                            <div className="text-4xl">
                               VS
                            </div>
                            <div className="flex flex-row items-center space-x-2">
                                <KiteIcon  size="w-6 h-6 text-xl" initials={getFirstLetters(match.opponents)}  />
                                <h1 className="text-gray-400 text-4xl" >{match.opponents}</h1>
                            </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-black text-4xl">{date.format('HH:mm')}</h1>
                        <h1 className="font-Inter font-light text-black">{date.format('dddd Do MMMM')}</h1>
                        <div className="font-Inter font-light text-black text-xl">{match.location}</div>
                    </div>

                    <button className=" hover:bg-yellow-500 border-gray-500 border-[1px] rounded-full min-w-[200px] py-3 px-6 text-black text-xl">
                        {match.results?.home !== undefined ? 'View Highlights' : 'Get Ticket'}
                    </button>
                </div>
            </div>
        </div>
    )
}
