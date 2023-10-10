import React, { useEffect, useRef, useState } from 'react';
import HomepageVideo1 from '@/assets/media/video1.mp4';
import HomepageVideo2 from '@/assets/media/video2.mp4';
import HomepageVideo3 from '@/assets/media/video3.mp4';
import { HomepageNewSlider} from '@/components/homepage/NewsCard';
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {NewsEntry} from "@/types";

export const HomePageShowcase: React.FC<{data: NewsEntry[]}> = ({data}) => {
    const videoRef = useRef<null | HTMLVideoElement>(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoSources = [HomepageVideo1, HomepageVideo2, HomepageVideo3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.src = videoSources[currentVideoIndex];
            videoRef.current!.load();
        }
    }, [currentVideoIndex]);

    return (
        <section
            className="pb-16 lg:pb-[136px] relative"
            style={{
                height: '100vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            ></div>

            <div className="h-screen">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                >
                    <source src={videoSources[currentVideoIndex]} type="video/mp4" />
                </video>

            </div>
           <div className=" hidden md:flex flex-col  absolute top-20  left-6 md:top-60 md:left-4 z-40">
               <AnimatedTitle className=" text-xl md:text-6xl text-white font-bold" title="Elevating Talents" />
               <AnimatedTitle className="text-xl md:text-6xl   text-app-secondary font-bold" title="Inspiring Futures" />
           </div>
            <HomepageNewSlider data={data} />
        </section>
    );
};

