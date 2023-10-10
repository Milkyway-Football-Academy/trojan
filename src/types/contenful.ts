export interface MatchesEntry {
    opponents: string
    location: 'AWAY' | 'HOME'
    id: number
    timeAndDate: string
    upcoming: boolean
    results: MatchesEntryResult | null
}


export interface MatchesEntryResult {
    home: number
    opponents: number
}



export interface NewsEntry {
    id: number;
    cover: Media;
    newsBody: {
        data: Record<string, any>;
        content: Array<Record<string, any>>;
        nodeType: string;
    };
    datePosted: string;
    newsHeading: string;
    subTitle: string;
}

export interface FacilityEntry {
    facilityName: string
    id: number
    image: Media

    description: string
}


export interface Media {
    metadata: Record<string, any>;
    sys: Record<string, any>;
    fields: Record<string, any>;
};
