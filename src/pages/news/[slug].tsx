import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {NewsEntry, SingleNewsPageProps} from "@/types";
import {PageWrapper} from "@/components/layout/PageWrapper";
import React from "react";
import {PageHero} from "@/components/layout/PageHero";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import moment from "moment";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {HomePageSection} from "@/components/layout/Section";
import {NewsCardItem} from "@/components/homepage/NewsCard";


const NewsPage: React.FC<SingleNewsPageProps> = ({news, allNews}) => {
    const date = moment(news.datePosted).format(('Do MMM LT'));

    return (
        <PageWrapper defaultTitle={news.newsHeading} siteDescription={news.subTitle}>
            <PageHero image={ContentfulToUrl(news.cover)} title={news.newsHeading} />
            <section>
                <div className="bg-app-primary py-10">
                    <AnimatedTitle title={news.newsHeading}  className="text-white  text-xl md:text-5xl font-Inter" />
                </div>
                <div className="container flex flex-col mt-10">
                    <div className="flex flex-col items-center w-full">
                            <div className="flex flex-row items-center space-x-5">
                                <div className="font-Inter text-gray-500">Date Posted</div>
                                <div className="text-sm text-gray-500 font-Inter font-light">{date}</div>
                            </div>
                    </div>
                    <div className="flex flex-col w-full my-16 items-center text-black">
                        <div className="text-black prose  font-light text-xl font-Inter max-w-[700px] leading-[1.5rem]">
                            {documentToReactComponents(news.newsBody)}
                        </div>
                    </div>
                </div>
                {allNews.length && (
                    <HomePageSection heading={`More News`} hasBtn={true} btnHref='/players' sectionBackground="bg-app-primary" >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {allNews.slice(0,3).map((p, index) => (
                                <NewsCardItem key={index} {...p} />
                            ))}
                        </div>
                    </HomePageSection>
                )}
            </section>
        </PageWrapper>
    )
}
export default NewsPage

interface ParamsI extends NextParsedUrlQuery {
    slug: string;
}
export const getStaticPaths: GetStaticPaths<ParamsI> = async () => {
    const client = new ContentfulClient();
    const news = await client.getEntries<NewsEntry>('news')
    const paths = news.map((n) => {

        return {
            params: {
                slug: n.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<SingleNewsPageProps> = async (
    ctx: GetStaticPropsContext,
) => {
    const client = new ContentfulClient();
    const news = await client.getEntryBySlug<NewsEntry>('news', ctx?.params?.slug as string ?? '')
    const allNews = (await client.getEntries<NewsEntry>('news'))

    return {
        props: {
            news,
            allNews
        },
    };
};
