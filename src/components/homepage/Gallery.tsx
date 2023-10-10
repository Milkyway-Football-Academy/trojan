import {HomePageSection} from "@/components/layout/Section";
import Image1 from '@/assets/JPG/Fans.jpg'
import Image, {StaticImageData} from "next/image";
import React, {useRef} from "react";
import {useScrollAnimation} from "@/hooks/useAnimation";

export const HomepageGallery: React.FC<{}> = () => {

    return (
        <HomePageSection heading='Gallery' hasBtn={true} btnHref='/gallery'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                    <GalleryItem image={Image1} title="Training" />
                    <GalleryItem image={Image1} title="Training" />
                    <GalleryItem image={Image1} title="Training" />
                    <GalleryItem image={Image1} title="Training" />
            </div>
        </HomePageSection>
    )
}


export const GalleryItem: React.FC<{image: StaticImageData | string, title: string}> = ({image, title}) => {

    return (
        <div className="flex relative">
                        <div className="container">
                            <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 min-h-[200px] lg:aspect-[1.73]">
                                <h3 className="text-xl leading-none font-Gloock text-white uppercase lg:text-[32px] lg:leading-none">
                                    {title}
                                </h3>
                            </div>
                            <Image
                                src={image}
                                className="absolute top-0 left-0 w-full h-full cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                        </div>
        </div>
    )
}
