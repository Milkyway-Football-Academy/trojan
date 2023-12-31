import {Document } from '@contentful/rich-text-types'


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
    newsBody: Document;
    datePosted: string;
    newsHeading: string;
    subTitle: string;

    slug: string
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


export interface PlayerEntry {
    playerName: string;
    dob: number;
    state: string;
    id: number;
    postion: string;

    slug: string
    biography?: string;
    number: number; // Assuming "number" is of type "Integer" in the JSON
    playerPhotos: Media[]; // Assuming "playerPhotos" is an array of strings
}

export interface ProgramEntry {
    name: string
    information: string
}


export type Department =
    "coaching" |
    "engineering" |
    "management" |
    "public relations" |
    "medical"


export interface StaffEntry {
    name: string
    biography: string
    image: Media
    email?: string
    phone?: string

    title: string

    department: Department

    slug: string
}



export interface PartnersEntry {
    name: string
    description: string
    image: Media
}
