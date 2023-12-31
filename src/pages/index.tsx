import {PageWrapper} from "@/components/layout/PageWrapper";
import {HomePageShowcase} from "@/components/homepage/Showcase";
import {HomepageTitle} from "@/components/homepage/HomepageTitle";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {FacilityEntry, HomepageProps, MatchesEntry, NewsEntry} from "@/types";
import {HomepageMatches} from "@/components/homepage/MatchCard";
import {HomepageNews} from "@/components/homepage/NewsCard";
import {GetStaticProps} from "next";
import {HeadCoachSection} from "@/components/homepage/HeadCoachSection";
import {SectionCards} from "@/components/homepage/Cards";
import {SocialSection} from "@/components/homepage/SocialSection";

const sampleContent = {
    partners: {
        title: "Our Partners",
        subtext:
            "We collaborate with a wide range of partners who share our passion for developing young football talent. Together, we create a brighter future for aspiring players.",
        href: "/partners",
    },
    facilities: {
        title: "State-of-the-Art Facilities",
        subtext:
            "Our world-class training facilities are equipped with the latest technology and amenities to provide the best training environment for our players.",
        href: "/information/facilities",
    },
    players: {
        title: "Meet Our Players",
        subtext:
            "Get to know the talented and dedicated young players who are part of the Milkyway Football Academy. Their passion and commitment drive our success.",
        href: "/players",
    },
};


 const Home: React.FC<HomepageProps> = ({matches, news}) => {

     return (
   <PageWrapper defaultTitle="Home" >
       <HomePageShowcase data={news} />
       <HomepageTitle />
       <HeadCoachSection />
       <HomepageMatches matches={matches}  />
       <SectionCards {...sampleContent['players']} type='players' />
       <HomepageNews data={news}  />
       <SectionCards {...sampleContent['partners']} type='partners' />
       <SocialSection />
       <SectionCards {...sampleContent['facilities']} type='facilities' />
   </PageWrapper>
  )
}

export default Home


export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
    const client = new ContentfulClient()
    try {
        const matchesEntry  = await client.getEntries<MatchesEntry>('matches');
        const newsEntry = await client.getEntries<NewsEntry>('news')
        return {
            props: {
                matches: matchesEntry,
                news: newsEntry.slice(0,5),
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
