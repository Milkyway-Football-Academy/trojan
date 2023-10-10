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


SwiperCore.use([A11y, EffectCoverflow, Autoplay]);


// export const FootballAcademyCard: React.FC<{
//     name: string;
//     description: string;
//     location: string;
//     imageUrl: StaticImageData | string;
// }> = ({ name, description, location, imageUrl }) => {
//     return (
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[300px] md:w-[860px]">
//             <Image
//                 src={imageUrl}
//                 alt={`Image of ${name}`}
//                 className="w-full h-32 object-cover object-center"
//             />
//             <div className="p-4">
//                 <h2 className="text-xl font-semibold">{name}</h2>
//                 <p className="text-gray-600 text-sm">{location}</p>
//                 <p className="text-gray-700 mt-2">{description}</p>
//                 <div className="mt-4">
//                     <a
//                         href="#"
//                         className="text-indigo-600 hover:text-indigo-800 font-semibold"
//                     >
//                         Learn More
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const HomepageNewsCard:React.FC<NewsEntry> = ({newsHeading, datePosted, id}) => {
        const date = new moment(datePosted).format('LT Do MMM')
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
               <ReadMoreBtn href={`/news/${id}`} label="Read More" />
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
export const HomepageNewsCardItem: React.FC<any> = ({ newsHeading, cover, datePosted, index }) => {
    const date = new moment(datePosted).format(('Do MMM LT'));

    const backgroundImageStyle = {
        backgroundImage: `url(${ContentfulToUrl(cover)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            className={classNames("cursor-pointer rounded-lg w-full h-[300px] md:h-full relative tracking-[.10em]", `grid-item-${index}`)}
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
    );
};
export const HomepageNews: React.FC<{data: NewsEntry[]}> = ({data}) => {
    return (
        <HomePageSection heading="News" btnHref={'/news'} hasBtn={true}>
            <div className="grid-parent">
                {data.map((news, index) => (
                    <HomepageNewsCardItem  key={index} index={index + 1} id={news.id} cover={news.cover} datePosted={news.datePosted} newsHeading={news.newsHeading} subTitle={news.subTitle}/>
                ))}
            </div>
        </HomePageSection>
    )
}
