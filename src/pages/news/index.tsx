import {PageWrapper} from "@/components/layout/PageWrapper";
import {HomePageSection} from "@/components/layout/Section";
import {GetStaticProps} from "next";
import { NewsEntry, NewsPageProps} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {NewsCardHighLightItem, NewsCardItem} from "@/components/homepage/NewsCard";
import React from "react";

const NewsPage: React.FC<NewsPageProps> = ({news}) => {
    return (
        <PageWrapper defaultTitle="News">
            <section className="bg-gray-100 h-full w-full mt-[50px] md:mt-[80px]">
                <HomePageSection heading="Highlights" sectionBackground="bg-app-accent">
                    <div className="news_grid">
                        {news.slice(0,4).map((n, index) => (
                            <NewsCardHighLightItem index={index + 1 } {...n}  key={index} />
                        ))}
                    </div>
                </HomePageSection>
                <HomePageSection heading="All News">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {news.map((n, index) => (
                            <NewsCardItem  {...n}  key={index} />
                        ))}
                    </div>
                </HomePageSection>
            </section>
        </PageWrapper>
    )
}

export default NewsPage;
export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {
    const client = new ContentfulClient()
    try {
        const newsEntry = await client.getEntries<NewsEntry>('news')
        return {
            props: {
                news: newsEntry
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
