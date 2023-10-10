import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const HomepageTitle: React.FC<{}> = ({}) => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            const containerWidth =
                document.querySelector('body')?.clientWidth || 0;

            gsap.to(titleRef.current, {
                x: containerWidth - titleRef.current.clientWidth,
                scrollTrigger: {
                    start: 'top left',
                    end: 'bottom right',
                    scrub: 1,
                },
            });
        }
    }, []);
    return (
        <div className="flex py-10">
            <h1 ref={titleRef} className="text-app-primary text-[30px] md:text-[100px] flex-shrink-0 leading-none tracking-[1.59px] sm:text-[60px] md:text-[100px] lg:text-[150px] lg:tracking-[5.59px] xl:text-[200px]">
                Unlocking Dreams, Nurturing Talent
            </h1>
        </div>
    );
};

