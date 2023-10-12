'use client';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import { PageProps } from '@/types';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import localFont from "next/font/local";
import {Loader} from "@/components/layout/Loader";
import {ClubPattern} from "@/components/homepage/ClubPattern";

const font = localFont({
    src:[{
        path: "../../assets/fonts/GratelosDisplay.otf",
        weight: "800",
        style: "bold"
    }]
})
export const PageWrapper: FC<PropsWithChildren<PageProps>> = ({
                                                                  children,
                                                                  defaultTitle,
                                                                  siteDescription,
                                                                    pageKeyword

                                                              }) => {

    const pathname = usePathname()
    const title = defaultTitle ?? 'Milkyway Football Academy';
    const description =

        siteDescription ??
        '';

    const image = '/thumbnail.jpg';
    const domain = 'https://milkywayfootballacademy.com';


    const [showLoader, setShowloader] = useState(true)

    useEffect(() => {
        setTimeout(() => setShowloader(false) , 2000)
    }, [])

    return (
        <div className={"overflow-hidden" + ' ' + font.className}>
            <Head>
                <title>{`${title} - Milkyway Football Academy`}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content={`${title} - Milkyway Football Academy`} />
                <meta property="og:type" content="website" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    name="ogUrl"
                    property="og:url"
                    content={`${domain}${pathname}`}
                />
                <meta property="og:title" content={`${title} - Milkyway Football Academy`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="twitter:url" content={`${domain}${pathname}`} />
                <meta
                    property="twitter:title"
                    content={`${title} - Milkyway Football Academy`}
                />
                <meta property="keywords" content={pageKeyword}/>
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={image} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/blue.png"
                />
            </Head>
            {showLoader ? <Loader /> : (
               <>
                   <Header />
                   <main className="flex antialiased flex-col min-h-screen bg-gray-100">{children}</main>
                   <ClubPattern />
                   <Footer />
               </>
            )}
        </div>
    );
};

