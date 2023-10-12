import {PageWrapper} from "@/components/layout/PageWrapper";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import {NextParsedUrlQuery} from "next/dist/server/request-meta";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {PageContentProps, PlayerEntry, PlayerPageProps} from "@/types";

export const PlayerPage = () => {
    return (
        <PageWrapper>

        </PageWrapper>
    )
}

export default PlayerPage

interface ParamsI extends NextParsedUrlQuery {
    id: string;
}
export const getStaticPaths: GetStaticPaths<ParamsI> = async () => {
    const client = new ContentfulClient();
    const players = await client.getEntries<PlayerEntry>('players')
    const paths = players.map((player) => {

        return {
            params: {
                id: player.id + '',
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
    const page = '' as any
        // await client.getEntry<PageContentProps>('')
    const player = '' as any
        // await client.getEntry<PlayerEntry>('', {id: ctx?.params?.id as any})
    return {
        props: {
           player,
            page
        },
    };
};
