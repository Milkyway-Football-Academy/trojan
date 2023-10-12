import {PageWrapper} from "@/components/layout/PageWrapper";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {PlayerCard, PlayerCardGroup} from "@/components/players/PlayerCard";
import {GetStaticProps} from "next";
import {
    PageContentProps,
    PlayerEntry,
    PlayerPositionType,
    PlayersPageProps
} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import React, {useMemo} from "react";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";
import {PageHero} from "@/components/layout/PageHero";

const Players: React.FC<PlayersPageProps> = ({players, page}) => {
    const midfieldsPlayers = useMemo<PlayerEntry[]>(() => {
        return players.filter((player) => player.postion === PlayerPositionType.MIDFIELD)
    }, [players])

    const forwardPlayers = useMemo<PlayerEntry[]>(() => {
        return players.filter((player) => player.postion === PlayerPositionType.FORWARD)
    }, [players])

    const goalkeepers = useMemo<PlayerEntry[]>(() => {
        return players.filter((player) => player.postion === PlayerPositionType.GOALKEEPER)
    }, [players])


    const defenders = useMemo<PlayerEntry[]>(() => {
        return players.filter((player) => player.postion === PlayerPositionType.DEFENCE)
    }, [players])

    return (
        <PageWrapper defaultTitle={page.title} siteDescription={page.description} pageKeyword={page.keywords?.split(' ').join(',')}>
            <section className="mt-[50px] md:mt-[80px]">
                <PageHero image={ContentfulToUrl(page.image)} title={page.title} />
                <div className="bg-app-primary py-20">
                    <AnimatedTitle title="Our Players"  className=" uppercase font-Inter text-white text-5xl md:text-[150px]" />
                </div>
                <div className="grid grid-rows-1 space-y-16 my-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-5">
                        <PlayerCardGroup positionGroup="forward" />
                        {forwardPlayers.map((player, index) => (
                            <PlayerCard slug={player.slug} name={player.playerName} image={ContentfulToUrl(player.playerPhotos[0])} key={index} number={player.number} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-5">
                        <PlayerCardGroup positionGroup="defence" />
                        {defenders.map((player, index) => (
                            <PlayerCard slug={player.slug} name={player.playerName} image={ContentfulToUrl(player.playerPhotos[0])} key={index} number={player.number} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-5">
                        <PlayerCardGroup positionGroup="midfield" />
                        {midfieldsPlayers.map((player, index) => (
                            <PlayerCard slug={player.slug} name={player.playerName} image={ContentfulToUrl(player.playerPhotos[0])} key={index} number={player.number} />
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-5">
                        <PlayerCardGroup positionGroup="goalkeeper" />
                        {goalkeepers.map((player, index) => (
                            <PlayerCard slug={player.slug} name={player.playerName} image={ContentfulToUrl(player.playerPhotos[0])} key={index} number={player.number} />
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    )
}

export default Players


export const getStaticProps: GetStaticProps<PlayersPageProps> = async () => {
    const client = new ContentfulClient()

    try {
        const players  = await client.getEntries<PlayerEntry>('players');
        const page  = await client.getEntry<PageContentProps>('2xlSrqEjLeOPaMy5J0g1VZ');

        return {
            props: {
                page,
                players,
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
