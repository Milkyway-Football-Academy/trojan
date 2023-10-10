import React, {useEffect} from "react";
import {gsap} from "gsap";

export const useScrollAnimation = (elementRef: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return;
        }

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top center+=100',
                end: 'top center',
                scrub: 1,
                markers: false,
            },
        });

        tl.fromTo(
            element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );
    }, [elementRef]);
};
