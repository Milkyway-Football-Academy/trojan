import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {PlayerEntry, PlayerPageProps} from "@/types";
import React, {PropsWithChildren} from "react";
import {PageHero} from "@/components/layout/PageHero";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";
import {HomePageSection} from "@/components/layout/Section";
import {PlayerCard} from "@/components/players/PlayerCard";

export const PlayerPage: React.FC<PlayerPageProps> = ({player, players}) => {
    const date  = new Date()
    return (
        <PageWrapper defaultTitle={player.playerName} siteDescription={player.biography}>
            <section className="mt-[50px] md:mt-[80px]">
                <PageHero className="h-[100vh]" image={ContentfulToUrl(player.playerPhotos[0])} title={player.playerName} />
                <div className="bg-app-primary px-16 shadow-lg border-b-3 border-app-accent text-white container py-4">
                    <div className="flex flex-col uppercase items-baseline">
                        <h1 className="text-3xl font-light font-Inter">{player.playerName.split(' ')[1]}</h1>
                        <h1 className="text-8xl">{player.playerName.split(' ')[0]}</h1>
                    </div>
                    <div>
                        <h1 className="text-2xl font-Inter font-light">{player.postion}</h1>
                    </div>
                </div>
                <div className="py-20 flex flex-col md:flex-row items-start md:space-x-16 container">
                    <div className="flex flex-col w-full  md:w-1/2">
                        <h1 className="text-app-primary text-5xl font-bold uppercase mb-10 underline">BIO</h1>
                        <div className="text-black font-Inter font-light leading-[2rem]">{player.biography}</div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 sentence">
                        <h1 className="text-app-primary text-5xl font-bold uppercase mb-10 underline">STAT</h1>
                        <Item>
                            <span>Position</span>
                            <span className="text-app-primary text-3xl">{player.postion}</span>
                        </Item>
                        <Item>
                            <span>Age</span>
                            <span className="text-app-primary text-3xl">{date.getFullYear() - Number(player.dob)}</span>
                        </Item>
                        <Item>
                            <span>State</span>
                            <span className="text-app-primary text-3xl">{player.state}</span>
                        </Item>
                    </div>
                </div>
            </section>
            {players.length && (
                <HomePageSection heading={`Other ${player.postion}`} hasBtn={true} btnHref='/players' sectionBackground="bg-app-primary" >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {players.map((p, index) => (
                            <PlayerCard key={index} slug={p.slug} image={ContentfulToUrl(p.playerPhotos[0])} name={p.playerName} number={p.number} />
                        ))}
                    </div>
                </HomePageSection>
            )}
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
export default PlayerPage

interface ParamsI extends NextParsedUrlQuery {
    slug: string;
}
export const getStaticPaths: GetStaticPaths<ParamsI> = async () => {
    const client = new ContentfulClient();
    const players = await client.getEntries<PlayerEntry>('players')
    const paths = players.map((player) => {

        return {
            params: {
                slug: player.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps: GetStaticProps<PlayerPageProps> = async (
    ctx: GetStaticPropsContext,
) => {
    const client = new ContentfulClient();
    const player = await client.getEntryBySlug<PlayerEntry>('players', ctx?.params?.slug as string ?? '')
    const players = (await client.getEntries<PlayerEntry>('players')).filter(p => player.postion === p.postion && p.slug !== player.slug).slice(0, 4)

    console.log({players})
    return {
        props: {
           player,
            players
        },
    };
};
