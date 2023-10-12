import {PageWrapper} from "@/components/layout/PageWrapper";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {InfoCards} from "@/components/information/Cards";

const InformationPage = () => {
    return (
        <PageWrapper defaultTitle="Club Information" siteDescription="Information about milkyway">
            <div className="mt-[50px] md:mt-[80px] bg-app-primary py-10">
                <AnimatedTitle title="Academy Information"  className="text-white  text-6xl md:text-[180px] font-Inter" />
            </div>
            <div className="flex flex-col w-full">
                <InfoCards
                    href="/information/about"
                    title="About Us"
                    subtext="Discover the rich history and culture of Milkyway Football Academy."
                    type="about"
                />
                <div className="grid grid-cols-2">
                    <InfoCards
                        href="/information/coaches"
                        title="Meet Our Coaches"
                        subtext="Our experienced coaching staff is dedicated to helping you succeed in the game."
                        type="coaches"
                    />
                    <InfoCards
                        href="/information/partners"
                        title="Our Partners"
                        subtext="We collaborate with leading brands to provide the best resources for our players."
                        type="partners"
                    />
                </div>
                <InfoCards
                    href="/information/programs"
                    title="Our Programs"
                    subtext="Unlock your potential with our specialized training programs designed for all ages."
                    type="programs"
                />
            </div>
        </PageWrapper>
    )
}




export default InformationPage
