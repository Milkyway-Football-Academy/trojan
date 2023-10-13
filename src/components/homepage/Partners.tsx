import React from "react";

import Image from "next/image";
import {ReadMoreBtn} from "@/components/homepage/Btn";



export const PartnersItem: React.FC<{image: string, desc:string ,name: string}> = ({image, name, desc}) => {
    return (
        <div className="flex bg-white rounded-lg flex-row item-center md:h-[200px]">
            <div>
                <Image
                    loading={"eager"}
                    alt="Milkyway Football Academy"
                    src={image}
                    width="0"
                    height="0"
                    className="flex-1 rounded-t-lg md:w-[200px] md:h-[200px]"
                />
            </div>
            <div className="container">
               <div className="flex flex-col p-4">
                   <h1 className="text-4xl text-app-primary">{name}</h1>
                   <div className="font-Inter font-light text-sm leading-[2rem]">
                       {desc}
                   </div>
                   <div className="mt-auto h-full">
                       <ReadMoreBtn href="/"  label="Read more" />
                   </div>
               </div>
            </div>
        </div>
    );
};
