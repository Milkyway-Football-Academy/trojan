import React from "react";
import {ProgramEntry} from "@/types";

export const ProgramCard:React.FC<ProgramEntry> = (props) => {
    return (
        <div className="bg-white shadow-3xl border-2 border-gray-300 rounded-lg">
            <div className="">
                <div className="w-full bg-gradient-to-b from-app-primary to-app-secondary h-[100px] rounded-t-lg" />
                <div className="flex flex-col p-4">
                    <h1 className="text-6xl uppercase font-app-primary font-bold my-3 ">{props.name}</h1>
                    <div className="font-light font-Inter text-sm text-black leading-[2rem]">{props.information}</div>
                </div>
            </div>
        </div>
    )
}
