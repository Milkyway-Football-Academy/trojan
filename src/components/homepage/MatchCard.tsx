import {HomePageSection} from "@/components/layout/Section";
import {MatchesEntry} from "@/types";
import classnames from "classnames";
import moment from 'moment'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions} from "swiper/types";
import {A11y, Autoplay} from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([A11y, Autoplay]);

export const MatchCard: React.FC<MatchesEntry>  =  (props) => {
    const mo = new moment(props.timeAndDate)
    const date = mo.format('Do MMM YYYY')
    const time = mo.format('LT')

    console.log(props.results)
    return (
        <div className="rounded-lg bg-white border border-[0.2px] border-app-primary h-[200px]">
           <div>
               <div className={classnames("flex flex-row justify-between w-full items-center p-3 rounded-t-lg", {
                   'bg-gray-300 text-app-primary': props.location.toLocaleUpperCase() === 'HOME',
                   'bg-app-secondary text-black': props.location.toLocaleUpperCase() === 'AWAY'
               })}>
                    <div className=" w-2/3 flex flex-row items-center">
                        <div className="text-3xl">{date}</div>
                        <div className="text-xs ml-3 font-Inter font-light">{time}</div>
                    </div>
                   <div className="text-lg">{props.location.toLocaleUpperCase()}</div>
               </div>
               <div className="p-3 flex flex-col w-full items-center text-3xl">
                   <div className="flex flex-col space-y-5">
                       {props?.results?.home !== undefined && (
                           <div className="flex flex-row items-center uppercase">
                               <div className="mr-4 text-gray-500">
                                   {props.results.home}
                               </div>
                               <div>
                                   Milkyway Academy
                               </div>
                           </div>

                       )}
                       {props?.results?.opponents && (
                           <div className="flex flex-row items-center uppercase">
                               <div className="mr-4 text-gray-500">
                                   {props.results.opponents}
                               </div>
                               <div>
                                   {props.opponents}
                               </div>
                           </div>

                       )}

                       {!props?.results?.opponents && (
                           <div>
                               <div className="text-center">{props.opponents}</div>
                           </div>
                       )}
                   </div>
               </div>
           </div>
        </div>
    )
}

export const HomepageMatches: React.FC<{matches: MatchesEntry[]}> = ({matches}) => {
    const sliderOptions: SwiperOptions = {
        modules: [A11y, Autoplay],
        slidesPerView: 1.2,
        spaceBetween: 10,

        loop: true,
        autoplay:{
            delay: 1000,
            disableOnInteraction: false
        },
        breakpoints:{
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };
    return (
        <HomePageSection heading="Matches">
            <Swiper  {...sliderOptions}>
                {matches.map((match, index) => (
                    <SwiperSlide key={index}>
                        <MatchCard opponents={match.opponents} location={match.location} id={match.id} timeAndDate={match.timeAndDate} upcoming={match.upcoming} results={match.results} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </HomePageSection>
    )
}
