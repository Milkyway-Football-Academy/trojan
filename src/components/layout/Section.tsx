import React, {useRef} from 'react'
import {ReadMoreBtn} from "@/components/homepage/Btn";
import {useScrollAnimation} from "@/hooks/useAnimation";
import classNames from "classnames";
interface HomePageSectionProps {
    heading: string,
    hasBtn?: boolean

    btnHref?: string

    sectionBackground?: string

    subtitle?: string

    titleClass?: string

    children?: React.ReactNode
}
export const HomePageSection: React.FC<HomePageSectionProps> = ({subtitle, titleClass, heading, sectionBackground, hasBtn, btnHref, children}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    return (
        <section ref={ref} className={sectionBackground ?? ''}>
           <div className="py-20">
               <div className="container">
                   <div>
                       <h1 className={classNames('uppercase text-5xl mb-10', titleClass, {
                           'text-app-primary': sectionBackground === undefined,
                           'text-white': sectionBackground !== undefined && !titleClass,
                       })}>{heading}</h1>
                       {subtitle && (
                           <p className="my-5 font-light text-white text-lg tracking-[0.13rem]">{subtitle}</p>
                       )}
                   </div>
                   {children}
                   {hasBtn && (
                       <div className="flex w-ful mt-10 justify-center">
                           <ReadMoreBtn outlined={sectionBackground !== undefined} href={btnHref ?? ''} label="View All" />
                       </div>
                   )}
               </div>
           </div>
        </section>
    )
}
