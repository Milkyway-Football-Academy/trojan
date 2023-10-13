import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {ContentfulClient} from "@/lib/ContentfulClient";
import { SingleStaffPageProps, StaffEntry} from "@/types";
import React, {PropsWithChildren} from "react";
import {PageHero} from "@/components/layout/PageHero";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";

export const StaffPage: React.FC<SingleStaffPageProps> = ({staff}) => {
    const date  = new Date()
    return (
        <PageWrapper defaultTitle={staff.name} siteDescription={staff.biography}>
            <section className="mt-[50px] md:mt-[80px]">
                <PageHero className="h-[100vh]" image={ContentfulToUrl(staff.image)} title={staff.name} />
                <div className="bg-app-primary px-16 shadow-lg border-b-3 border-app-accent text-white container py-4">
                    <div className="flex flex-col uppercase items-baseline">
                        <h1 className="text-3xl font-light font-Inter">{staff.name.split(' ')[1]}</h1>
                        <h1 className="text-8xl">{staff.name.split(' ')[0]}</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-Inter font-light">{staff.title}</h1>
                    </div>
                </div>
                <div className="py-20 flex flex-col md:flex-row items-start md:space-x-16 container">
                    <div className="flex flex-col w-full  md:w-1/2">
                        <h1 className="text-app-primary text-5xl font-bold uppercase mb-10 underline">BIO</h1>
                        <div className="text-black font-Inter font-light leading-[2rem]">{staff.biography}</div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 sentence">
                        <h1 className="text-app-primary text-5xl font-bold uppercase mb-10 underline">CONTACT</h1>
                        {staff?.email && (
                            <Item>
                                <span>Email</span>
                                <span className="text-app-primary text-3xl">{staff.email}</span>
                            </Item>
                        )}
                        {staff?.phone && (
                            <Item>
                                <span>Phone</span>
                                <span className="text-app-primary text-3xl">{staff.phone}</span>
                            </Item>
                        )}
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export const Item: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex py-3 border-gray-300 border-b-[1px] flex-col text-xl text-gray-400 ">
            {children}
        </div>
    )
}
export default StaffPage

interface ParamsI extends NextParsedUrlQuery {
    slug: string;
}
export const getStaticPaths: GetStaticPaths<ParamsI> = async () => {
    const client = new ContentfulClient();
    const staffs = await client.getEntries<StaffEntry>('staffs')
    const paths = staffs.map((staff) => {

        return {
            params: {
                slug: staff.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<SingleStaffPageProps> = async (
    ctx: GetStaticPropsContext,
) => {
    try {
        const client = new ContentfulClient();
        const staff = await client.getEntryBySlug<StaffEntry>('staffs', ctx?.params?.slug as string ?? '')
        return {
            props: {
                staff
            },
        };
    } catch (error) {
        console.log(error)
        return {
            notFound: true
        }
    }
};
