import React from 'react';
import {ReadMoreBtn} from "@/components/homepage/Btn";
import { SwiperSlide, Swiper } from 'swiper/react';
import {A11y, Autoplay, EffectCoverflow, EffectFlip} from 'swiper/modules';
import SwiperCore from 'swiper';
import {SwiperOptions} from "swiper/types";
import {HomePageSection} from "@/components/layout/Section";
import {NewsEntry} from "@/types";
import moment from "moment/moment";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";


SwiperCore.use([A11y, EffectCoverflow, Autoplay]);


export const HomepageNewsCard:React.FC<NewsEntry> = ({newsHeading, datePosted, slug}) => {
        const date =  moment(datePosted).format('LT Do MMM')
    return (
        <div className="uppercase bg-white rounded-lg w-full p-5 shadow-lg ">
            <div className="flex flex-col w-full space-y-5">
                <div className="flex text-xs md:text-sm flex-row font-Inter text-gray-400 items-center space-x-3">
                    <p>{`"Club TV"`}</p>
                    <p>{date}</p>
                </div>
                <div className="">
                    <h1 className="text-2xl md:text-5xl text-app-primary font-bold">{newsHeading}</h1>
                </div>
               <ReadMoreBtn href={`/news/${slug}`} label="Read More" />
            </div>
        </div>
    )
}


export const HomepageNewSlider: React.FC<{ data: NewsEntry[] }> = (props) => {
    const sliderOptions: SwiperOptions = {
        modules: [A11y, EffectFlip, Autoplay],
        slidesPerView: 1,
        loop: true,
        effect: 'coverflow',
        autoplay:{
            delay: 4000,
            disableOnInteraction: false
        }
    };

    return (
        <div className="absolute top-[50vh] left-5 md:bottom-16 md:right-4 z-40">
            <Swiper {...sliderOptions} className="w-[280px] md:w-[860px] max-w-[860px]">
                {props.data.map((news, index) => (
                    <SwiperSlide key={index} >
                        <HomepageNewsCard {...news} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export const HomepageNewsCardItem: React.FC<any> = ({ newsHeading, cover, slug, datePosted, index}) => {
    const date = moment(datePosted).format(('Do MMM LT'));
    const backgroundImageStyle = {
        backgroundImage: `url(${ContentfulToUrl(cover)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
       <div className={`grid-item-${index}`}>
           <Link href={`/news/${slug}`}>
               <div
                   className={classNames("cursor-pointer rounded-lg w-full h-[300px] md:h-full relative tracking-[.10em]")}
                   style={backgroundImageStyle}
               >
                   <div className="rounded-lg flex flex-col justify-end absolute z-10 bottom-5  rounded-[32px] px-[14px] py-1 lg:top-8">
                       <div className="text-sm mb-2 text-gray-300 font-Inter font-light">{date}</div>
                       <h1 className="text-3xl text-white leading-none sentence lg:leading-none">
                           {newsHeading}
                       </h1>
                   </div>
                   <div className="rounded-lg absolute top-0 left-0 w-full h-full bg-black/30" />
               </div>
           </Link>
       </div>
    );
};

export const NewsCardHighLightItem: React.FC<any> = ({ newsHeading, cover, datePosted, index, slug}) => {
    const date = moment(datePosted).format(('Do MMM LT'));

    const backgroundImageStyle = {
        backgroundImage: `url(${ContentfulToUrl(cover)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className={`news-grid-${index}`}>
            <Link href={`/news/${slug}`}>
                <div
                    className={classNames("cursor-pointer rounded-lg w-full h-[300px] md:h-full relative tracking-[.10em]")}
                    style={backgroundImageStyle}
                >
                    <div className="rounded-lg flex flex-col justify-end absolute z-10 bottom-5  rounded-[32px] px-[14px] py-1 lg:top-8">
                        <div className="text-sm mb-2 text-gray-300 font-Inter font-light">{date}</div>
                        <h1 className="text-3xl text-white leading-none sentence lg:leading-none">
                            {newsHeading}
                        </h1>
                    </div>
                    <div className="hover:bg-black/50 rounded-lg absolute top-0 left-0 w-full h-full bg-black/10" />
                </div>
            </Link>

        </div>

    );
};


export const NewsCardItem: React.FC<any> = ({ newsHeading, cover, datePosted, slug}) => {
    const date = moment(datePosted).format(('Do MMM LT'));
    const backgroundImageStyle = {
        backgroundImage: `url(${ContentfulToUrl(cover)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '250px'
    };

    return (
        <Link href={`/news/${slug}`}>

            <div
                className={classNames(" relative cursor-pointer rounded-xl bg-white w-full h-[400px] tracking-[.10em]")}
            >
                <div style={backgroundImageStyle} className="rounded-t-xl" />

                <div className="bg-white flex rounded-b-2xl h-[150px] absolute w-full bottom-0 flex-col justify-end p-3">
                    <div className="text-sm mb-2 text-gray-400 font-Inter font-light">{date}</div>
                    <h1 className="text-3xl text-app-primary leading-none sentence lg:leading-none">
                        {newsHeading}
                    </h1>
                </div>
            </div>
        </Link>
    );
};
export const HomepageNews: React.FC<{data: NewsEntry[]}> = ({data}) => {
    return (
        <HomePageSection heading="News" btnHref={'/news'} hasBtn={true}>
            <div className="grid-parent">
                {data.map((news, index) => (
                    <HomepageNewsCardItem  key={index} index={index + 1} slug={news.slug} cover={news.cover} datePosted={news.datePosted} newsHeading={news.newsHeading} subTitle={news.subTitle}/>
                ))}
            </div>
        </HomePageSection>
    )
}
