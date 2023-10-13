import LOGO from '@/assets/PNG/White only.png';
import Image from 'next/image'
import Link from 'next/link'
import React from "react";
export const Footer = () => {
  return (
      <footer className="bg-black">
          <nav className="container py-20">
              <div className="flex flex-wrap items-center">
                  <Image loading={"eager"} src={LOGO} alt="milkyway football academy" width={70} height={70}/>
                  <div>
                      <ul className="flex items-center flex-wrap space-x-3">
                          <li>
                              <FooterLink href='/information' label="Club info" />
                          </li>
                          <li>
                              <FooterLink href='/partners' label="partners" />
                          </li>
                          <li>
                              <FooterLink href='/program' label="Academy program" />
                          </li>
                          <li>
                              <FooterLink href='/privacy' label="Privacy Policy" />
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </footer>
  )
}

const FooterLink: React.FC<{href: string, isExternal?: boolean, label: string}> = ({
                                                                                    href, isExternal = false, label
                                                                                }) => {
    return (
        <div className="font-Inter uppercase text-white text-xs font-light md:font-normal md:text-sm hover:text-app-secondary hover:underline">
            <Link href={href}>
                {label}
            </Link>
        </div>
    )
}
