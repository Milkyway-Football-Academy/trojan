import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticProps} from "next";
import {
    PartnersEntry,
    PartnersPageProps
} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import React from "react";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import { PartnersItem} from "@/components/homepage/Partners";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";
import {HomePageSection} from "@/components/layout/Section";

const PartnersPage: React.FC<PartnersPageProps> = ({partners}) => {
    return (
        <PageWrapper defaultTitle="facilities">
            <section className="flex flex-col mt-[50px] md:mt-[80px]">
                <div className="bg-app-primary py-20">
                    <AnimatedTitle title="Our Partners"  className=" uppercase font-Inter text-white text-5xl md:text-[150px]" />
                </div>
                <HomePageSection subtitle="partners" heading='Partners'  sectionBackground="bg-app-accent">
                    <div className="grid grid-rows-1 gap-4">
                        {partners.map((item, index) => (
                            <PartnersItem key={index} desc={item.description} image={ContentfulToUrl(item.image)} name={item.name} />
                        ))}
                    </div>
                </HomePageSection>
            </section>
        </PageWrapper>
    )
}

export default PartnersPage;

export const getStaticProps: GetStaticProps<PartnersPageProps> = async () => {
    const client = new ContentfulClient()
    try {
        const partners = await client.getEntries<PartnersEntry>('partners')
        return {
            props: {
                partners
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
