import {PageWrapper} from "@/components/layout/PageWrapper";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {PlayerCard, PlayerCardGroup} from "@/components/players/PlayerCard";

const Players = () => {
    return (
        <PageWrapper defaultTitle="Players - Milkyway" siteDescription="Our players at milkyway football academy">
            <div className="mt-[80px] py-10">
                <AnimatedTitle title="Our Players"  className="text-black  font-light text-6xl md:text-[180px] font-Inter" />
            </div>
            <div className="grid grid-rows-1 space-y-16">
                <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 md:gap-5">
                    <PlayerCardGroup positionGroup="forward" />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 md:gap-5">
                    <PlayerCardGroup positionGroup="defence" />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 md:gap-5">
                    <PlayerCardGroup positionGroup="midfield" />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-2 md:gap-5">
                    <PlayerCardGroup positionGroup="goalkeeper" />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                    <PlayerCard name="Musa Isa" image="" number={9} slug='musa-isa' />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Players
