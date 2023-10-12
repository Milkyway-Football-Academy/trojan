import {GetStaticProps} from "next";
import {AboutPageProps, ProgramEntry, ProgramsPageProps} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {PageWrapper} from "@/components/layout/PageWrapper";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import React from "react";
import {ProgramCard} from "@/components/programs/ProgramCard";

const ProgramsPage: React.FC<ProgramsPageProps> = (props) => {
    return (
        <PageWrapper defaultTitle="Programs - Milkyway academy">

            <section className="flex flex-col mt-[50px] mb-4 md:mt-[80px]">
                <div className="bg-app-primary py-10">
                    <AnimatedTitle title="Our Programs"  className="text-white  text-6xl md:text-[180px] font-Inter" />
                </div>
                <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-4 mt-16">
                    {props.programs.map((program, index) => (
                        <ProgramCard {...program} key={index} />
                    ))}
                </div>
            </section>
        </PageWrapper>
    )
}


export default ProgramsPage


export const getStaticProps: GetStaticProps<ProgramsPageProps> = async () => {
    const client = new ContentfulClient()

    try {
        const programs  = await client.getEntries<ProgramEntry>('programs');
        return {
            props: {
               programs
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
