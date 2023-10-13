import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import React, {PropsWithChildren} from "react";
import {PageWrapper} from "@/components/layout/PageWrapper";
import {FaArrowLeft} from "react-icons/fa";
import {useRouter} from "next/router";
import {PageHero} from "@/components/layout/PageHero";
import {GetStaticProps} from "next";
import {AboutPageProps,} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";

const Item: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex flex-row justify-center items-center py-3 border-gray-300 border-b-[1px] flex-col text-xl text-app-primary">
            {children}
        </div>
    )
}

const AboutPage: React.FC<AboutPageProps> = (props) => {
    const router= useRouter()
    return (
        <PageWrapper  siteDescription={props.description} defaultTitle={props.title} pageKeyword={props.keywords?.split(' ').join(',')}>
            <section className="flex flex-col mt-[50px] md:mt-[80px]">
                <PageHero image={ContentfulToUrl(props.image)} title="About Milkyway football " />
                <div className="flex flex-col bg-app-primary py-10  w-full text-white">
                    <AnimatedTitle title="Our History" className=" uppercase font-Inter text-5xl md:text-[150px]" />
                        <button className=" underline flex mt-3 flex-row items-center" onClick={() => router.back()}>
                            <FaArrowLeft className="text-white w-[40px]" />
                            <div className="underline">Academy Information</div>
                        </button>
                </div>
                <div className="container flex flex-col">
                    <div className="flex flex-col w-full my-16 items-center text-black">
                        <div className="text-black prose  font-extralight text-xl font-Inter max-w-[700px] leading-[1.5rem]">
                            {documentToReactComponents(props.content)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <Item>
                        <div className="text-2xl">Phone</div>
                        <div className="text-gray-500">+234 803 082 6961</div>
                    </Item>
                    <Item>
                        <div className="text-2xl">Address</div>
                        <div className="text-gray-500">No. 5 St. Louis Avenue, Bompai, Kano</div>
                    </Item>

                    <Item>
                        <div className="text-2xl">Email</div>
                        <div className="text-gray-500">contact@milkywayfootballacademy.com</div>
                    </Item>
                </div>
            </section>
        </PageWrapper>
    )
}



export const getStaticProps: GetStaticProps<AboutPageProps> = async () => {
    const client = new ContentfulClient()

    try {
        const content  = await client.getEntry<AboutPageProps>('5F0MpB5eBu8wxu4zYEKAyz');
        return {
            props: {
                ...content
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
export default AboutPage
