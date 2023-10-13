import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticProps} from "next";
import {FacilityEntry, FacilityPageProps, MatchesEntry, MatchPageProps} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import React from "react";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {HomepageFacilities} from "@/components/homepage/Facilities";

const FacilitiesPage: React.FC<FacilityPageProps> = (props) => {
    return (
        <PageWrapper defaultTitle="facilities">
            <section className="flex flex-col mt-[50px] md:mt-[80px]">
                <div className="bg-app-primary py-20">
                    <AnimatedTitle title="Our Facilities"  className=" uppercase font-Inter text-white text-5xl md:text-[150px]" />
                </div>
                <HomepageFacilities data={props.facilities} />
            </section>
        </PageWrapper>
    )
}

export default FacilitiesPage;

export const getStaticProps: GetStaticProps<FacilityPageProps> = async () => {
    const client = new ContentfulClient()
    try {
        const facilities = await client.getEntries<FacilityEntry>('facility')
        return {
            props: {
                facilities
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
