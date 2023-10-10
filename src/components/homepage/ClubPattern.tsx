import Image from "next/image";
import LOGO from '@/assets/PNG/White only.png'

export const ClubPattern: React.FC<{}> = () => {
    return (
        <div className="bg-app-secondary relative w-full h-[500px] flex justify-center items-center">
            <div className="club--pattern w-full h-[500px] top-0 left-0 absolute flex justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

                <div className="z-20">
                    <Image src={LOGO} alt="milkyway football academy logo" width={500} height={500} />
                </div>
            </div>
        </div>
    );
};
