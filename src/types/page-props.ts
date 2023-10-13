import {
    FacilityEntry,
    MatchesEntry,
    NewsEntry,
    PlayerEntry,
    Media,
    ProgramEntry,
    StaffEntry,
    PartnersEntry
} from "@/types/contenful";
import {Document } from '@contentful/rich-text-types'
export interface PageProps {
    defaultTitle?: string
    siteDescription?: string

    pageKeyword?: string
}

export interface HomepageProps {
    matches: MatchesEntry[]
    news: NewsEntry[]

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


export interface StaffPageProps {
    staffs: StaffEntry[]
}

export interface SingleStaffPageProps {
    staff: StaffEntry
}


export interface NewsPageProps {
    news: NewsEntry[]
}

export interface SingleNewsPageProps {
    news: NewsEntry
    allNews: NewsEntry[]
}


export interface MatchPageProps {
    matches: MatchesEntry[]
    upcomingMatch: MatchesEntry
}



export interface FacilityPageProps {
    facilities: FacilityEntry[]
}


export interface PartnersPageProps {
    partners: PartnersEntry[]
}
