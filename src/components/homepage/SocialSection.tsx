import { TikTokEmbed, InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import {HomePageSection} from "@/components/layout/Section";
import {IconButton} from "@/components/homepage/Btn";
import Image from "next/image";
import IgIcon from '@/assets/icons/ig-icon.svg'
import YoutubeIcon from '@/assets/icons/youtube-icon.svg'
import TiktokIcon from '@/assets/icons/tiktok-icon.svg'
export const SocialSection = () => {
    return (
        <HomePageSection titleClass="text-app-primary" heading="Socials" sectionBackground="bg-white">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3  flex flex-col">
                    <div className="flex flex-col ">
                       <div className="text-black font-Inter text-3xl font-light">
                           Check out our exciting TikTok content for behind-the-scenes
                           moments and fun football challenges.
                       </div>
                        <div className="flex flex-row items-center space-x-3 mt-5">
                            <IconButton href="/">
                                <Image loading="eager" src={TiktokIcon} alt="milkyway tiktok" width={40} height={40}  />
                            </IconButton>
                            <IconButton href="/">
                                <Image loading={"eager"} src={IgIcon} alt="milkyway tiktok" width={40} height={40}  />
                            </IconButton>
                            <IconButton href="/">
                                <Image src={YoutubeIcon} alt="milkyway tiktok" width={40} height={40}  />
                            </IconButton>
                        </div>
                    </div>
                    <div className="flex w-full flex-row mt-12 md:mt-auto">
                        <YouTubeEmbed url="https://www.youtube.com/watch?v=5USop3Nlbns" width="100%"  height={500} />
                    </div>
                </div>
                    <div className="flex flex-col md:flex-row w-full mt-10 space-y-5 md:space-y-0 md:mt-0">
                        <TikTokEmbed url="https://www.tiktok.com/@milkyway_footballacademy/video/7286576951303654662" width="100%" />
                        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width="100%" />
                </div>
            </div>
        </HomePageSection>
    )
}
