import Image from "next/image";
import LOGO from "@/assets/PNG/White only.png";
export const Loader = () => {
    return (
        <div className="bg-app-accent relative w-screen h-screen flex justify-center items-center">
            <div className="club--pattern w-full h-full top-0 left-0 absolute flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

                <div className="z-20">
                    <Image loading={"eager"} src={LOGO} alt="milkyway football academy logo"  className="custom-spin w-[300px] md:w-[500px] h-[300px] md:h-[500px]" />
                </div>
            </div>
        </div>
    )
}
