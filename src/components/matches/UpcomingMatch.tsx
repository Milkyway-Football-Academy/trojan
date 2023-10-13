import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {MatchesEntry} from "@/types";
import Image from "next/image";
import Logo from '@/assets/PNG/black.png'
import {KiteIcon} from "@/components/homepage/Icon";
import {getFirstLetters} from "../../../utils/getIntials";
export const UpcomingMatchCountdown: React.FC<{match: MatchesEntry}> = ({match}) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const matchTime = moment(match.timeAndDate);
        const currentTime = moment();
        const timeDiff = matchTime.diff(currentTime);

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });

        const interval = setInterval(() => {
            const newTimeDiff = matchTime.diff(moment());
            const newDays = Math.floor(newTimeDiff / (1000 * 60 * 60 * 24));
            const newHours = Math.floor((newTimeDiff / (1000 * 60 * 60)) % 24);
            const newMinutes = Math.floor((newTimeDiff / (1000 * 60)) % 60);
            const newSeconds = Math.floor((newTimeDiff / 1000) % 60);
            setCountdown({ days: newDays, hours: newHours, minutes: newMinutes, seconds: newSeconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [match]);

    const date = moment(match.timeAndDate)

    return (
        <div className="container my-16 flex flex-row items-center jusitfy-center justify-center w-full">
            {match.upcoming ? (
                <div className="bg-white text-app-primary rounded-lg w-full md:w-2/3  border-gray-300 border-[1px] p-6">
                    <p className="text-3xl font-Inter uppercase text-center mb-10">Upcoming Match</p>
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="flex flex-row items-center space-x-2">
                            <Image src={Logo} width={65} height={64} alt="Milkyway academy"/>
                            <h1 className="text-gray-400 text-4xl">Milkyway Academy</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-black text-4xl">{date.format('HH:mm')}</h1>
                            <h1 className="font-Inter font-light text-black">{date.format('dddd Do MMMM')}</h1>
                        </div>
                        <div className="flex flex-row items-center space-x-2">
                            <KiteIcon initials={getFirstLetters(match.opponents)}  />
                            <h1 className="text-gray-400 text-4xl" >{match.opponents}</h1>
                        </div>
                    </div>
                    <div className="flex mt-20 flex-row space-x-6 items-center justify-center text-5xl md:text-8xl text-green-500">
                        <div className="flex flex-col items-center">
                            <p>{countdown.days < 10 ? `0${countdown.days}` : countdown.days}:</p>
                            <p className="text-gray-400 text-sm font-light font-Inter">days</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}:</p>
                            <p className="text-gray-400 text-sm font-light font-Inter">hours</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>{countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}:</p>
                            <p className="text-gray-400 text-sm font-light font-Inter">minutes</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p>{countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}</p>
                            <p className="text-gray-400 text-sm font-light font-Inter">seconds</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No upcoming match</p>
            )}
        </div>
    );
};

