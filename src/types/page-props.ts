import {FacilityEntry, MatchesEntry, NewsEntry} from "@/types/contenful";

export interface PageProps {
    defaultTitle?: string
    siteDescription?: string
}

export interface HomepageProps {
    matches: MatchesEntry[]
    news: NewsEntry[]
    facilities: FacilityEntry[]

}
