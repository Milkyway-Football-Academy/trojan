import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticProps} from "next";
import {FacilityEntry, HomepageProps, MatchesEntry, MatchPageProps, NewsEntry} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import moment from "moment";
import React from "react";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {UpcomingMatchCountdown} from "@/components/matches/UpcomingMatch";
import {HomePageSection} from "@/components/layout/Section";
import {MatchCard} from "@/components/matches/MatchCard";

const MatchesPage: React.FC<MatchPageProps> = ({upcomingMatch, matches}) => {
    return (
        <PageWrapper defaultTitle={`Milkyway vs ${upcomingMatch.opponents}`}>
            <section className='bg-blue-50 mt-[50px] md:mt-[80px]'>
                <div className="bg-app-primary py-20">
                    <AnimatedTitle title="Fixures & Tables"  className=" uppercase font-Inter text-white text-5xl md:text-[150px]" />
                </div>
                <UpcomingMatchCountdown match={upcomingMatch} />

                <HomePageSection heading="All Matches">
                    <div className="flex flex-col w-full space-y-10 container px-3 md:px-10">
                        {matches.map((match, index) => (
                            <MatchCard key={index} match={match} />
                        ))}
                    </div>
                </HomePageSection>
            </section>
        </PageWrapper>
    )
}


export default MatchesPage





export const getStaticProps: GetStaticProps<MatchPageProps> = async () => {
    const client = new ContentfulClient()

    try {
        const matches  = await client.getEntries<MatchesEntry>('matches');
        const currentDate = moment();

        const futureMatches = matches.filter(match => moment(match.timeAndDate).isAfter(currentDate));

        futureMatches.sort((a, b) => moment(a.timeAndDate).diff(moment(b.timeAndDate)));

        const nearestFutureMatch = futureMatches[0];
        return {
            props: {
                matches,
                upcomingMatch: nearestFutureMatch
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
