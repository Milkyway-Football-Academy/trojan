import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames';

interface TitleProps {
    title: string;
    className?: string;
}

export const AnimatedTitle: React.FC<TitleProps> = ({
                                         title,
                                         className = '',
                                     }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            const containerWidth =
                document.querySelector('.container')?.clientWidth || 0;
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
        <div className="flex w-full ">
            <h1 ref={titleRef} className={classNames(className, 'whitespace-nowrap')}>
                {title}
            </h1>
        </div>
    );
};

