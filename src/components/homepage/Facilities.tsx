import React from "react";
import {FacilityEntry} from "@/types";
import Image, {StaticImageData} from "next/image";
import Image1 from "@/assets/JPG/Fans.jpg";
import {HomePageSection} from "@/components/layout/Section";
import {GalleryItem} from "@/components/homepage/Gallery";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";


interface HomepageFacilitiesProps {
    data: FacilityEntry[]
}
export const HomepageFacilities: React.FC<HomepageFacilitiesProps> = ({data}) => {
    return (
        <HomePageSection subtitle="World-class Facilities for your player to help them reach the next level " heading='Facilities'  sectionBackground="bg-app-accent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {data.map((item, index) => (
                    <FacilityItem key={index} image={ContentfulToUrl(item.image)} title={item.facilityName} />
                ))}
            </div>
        </HomePageSection>
    )
}


export const FacilityItem: React.FC<{image: string, title: string}> = ({image, title}) => {
    return (
        <div className="flex relative min-h-[500px]">
            <div className="container relative rounded-[20px]">
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 lg:aspect-[1.73]">
                    <h3 className="text-xl leading-none text-white uppercase lg:text-[32px] lg:leading-none">
                        {title}
                    </h3>
                </div>
                <Image
                    alt="Milkyway Football Academy"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    sizes="100vh"
                    loading={"eager"}
                    className="absolute top-0 left-0 w-full h-full cover rounded-[10px]"
                />
                <div className="absolute top-0 left-0 w-full h-full rounded-[10px]">
                    <div className="fade-layer rounded-[10px]"></div>
                </div>
            </div>
        </div>
    );
};
