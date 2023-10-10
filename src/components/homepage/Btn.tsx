import React from "react";
import Link from "next/link";
import classNames from "classnames";
import {FaArrowRight} from "react-icons/fa";


interface ReadMoreBtnProps {
    href: string
    label: string

    outlined?: boolean
}

interface LearnMoreBtnProps  extends Omit<ReadMoreBtnProps, 'outlined'> {
    textClass?: string
}
export const ReadMoreBtn: React.FC<ReadMoreBtnProps> = (props) => {
    return (
       <button className={classNames(
           "hover:opacity-50 rounded-[40px] outline-none p-2 w-[100px] text-center font-bold text-base md:text-xl text-white bg-app-primary",
       {'border-[1px] border-white': props.outlined}
       )}
       >
           <Link href={props.href}>
               {props.label}
           </Link>
       </button>
    )
}

export const LearnMoreBtn: React.FC<LearnMoreBtnProps> = (props) => {
    return (
        <button className={classNames('text-white  items-center flex flex-row sentence hover:text-gray-300 hover:scale-x-5', props.textClass)}
        >
            <Link href={props.href}>

                    {props.label}
            </Link>
                    <FaArrowRight className="text-white w-[40px]" />
        </button>
    )
}


export const IconButton: React.FC<{href: string, children?: React.ReactNode}> = ({children, href}) => {
    return (
        <a target="_blank" href={href} className="cursor-pointer">
            {children}
        </a>
    )
}
