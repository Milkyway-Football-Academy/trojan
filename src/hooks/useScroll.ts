import { useState, useEffect } from 'react';

interface useScrollPositionProps {
    yPosition: number
    xPosition: number
}
function useScrollPosition(): useScrollPositionProps {
    const [scrollPosition, setScrollPosition] = useState<useScrollPositionProps>({
        xPosition: 0,
        yPosition: 0
    });

    useEffect(() => {
        function handleScroll() {
            setScrollPosition({
                xPosition: window.scrollX,
                yPosition: window.scrollY
            });
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}

export default useScrollPosition;
