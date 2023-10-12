import {FacilityEntry, MatchesEntry, NewsEntry, PlayerEntry, Media, ProgramEntry} from "@/types/contenful";
import {Document } from '@contentful/rich-text-types'
export interface PageProps {
    defaultTitle?: string
    siteDescription?: string

    pageKeyword?: string
}

export interface HomepageProps {
    matches: MatchesEntry[]
    news: NewsEntry[]
    facilities: FacilityEntry[]

}




export type PlayersPosition = 'forward' | 'defence' | 'midfield' | 'goalkeeper'

export enum PlayerPositionType {
    FORWARD = 'forward',
    DEFENCE ='defence',

    MIDFIELD= 'midfield',

    GOALKEEPER = 'goalkeeper'

}


export interface AboutPageProps {
    title: string;
    content: Document;
    keywords: string;
    description: string;
    // @ts-ignore
    image: Media;
}

export interface PageContentProps {
    title: string;
    content?: Document;
    keywords: string;
    description: string;
    // @ts-ignore
    image: Media;
}

export interface PlayersPageProps{
    page: PageContentProps
    players: PlayerEntry[]
}

export interface PlayerPageProps{
    player: PlayerEntry
    players: PlayerEntry[]
}


export interface ProgramsPageProps{
    programs: ProgramEntry[]
}



