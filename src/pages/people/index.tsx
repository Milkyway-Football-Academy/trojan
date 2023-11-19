import {GetStaticProps} from "next";
import {Department, StaffEntry, StaffPageProps} from "@/types";
import {ContentfulClient} from "@/lib/ContentfulClient";
import {PageWrapper} from "@/components/layout/PageWrapper";
import React, {useMemo} from "react";
import {PageHero} from "@/components/layout/PageHero";
import {AnimatedTitle} from "@/components/homepage/AnimatedTitle";
import {PeopleCard} from "@/components/people/PeopleCard";
import {ContentfulToUrl} from "../../../utils/contentfulToUrl";


const departments: Department[] = ['public relations', 'management', 'coaching', 'medical', 'engineering']
const PeoplePage: React.FC<StaffPageProps> = (props) => {
    const ManagementStaff = useMemo<StaffEntry[]>(() => {
        return props.staffs.filter(staff => staff.department === 'management')
    }, [props.staffs])

    const CoachingStaff = useMemo<StaffEntry[]>(() => {
        return props.staffs.filter(staff => staff.department === 'coaching')
    }, [props.staffs])

    const PublicRelationsStaff = useMemo<StaffEntry[]>(() => {
        return props.staffs.filter(staff => staff.department === 'public relations')
    }, [props.staffs])

    const RecruitingStaff = useMemo<StaffEntry[]>(() => {
        return props.staffs.filter(staff => staff.department === 'medical')
    }, [props.staffs])


    return (
        <PageWrapper defaultTitle="People at Milkyway academy">
            <section className="flex relative flex-col mt-[50px] md:mt-[80px]">
                <PageHero image={"https://images.ctfassets.net/w4qd2j3ubo7v/30Dv7Ipw0TeDgP9MlgcGcQ/66f36f953600a501ce1b06d91dd781fa/IMG-20230907-WA0177.jpg"} title="About Milkyway football " />
                <div className="flex flex-col bg-app-primary py-10  w-full text-white">
                    <AnimatedTitle title="People At Milkyway" className=" uppercase font-Inter text-5xl md:text-[150px]" />
                </div>
                <div className="container md:px-20 py-20">
                    <div className="hidden md:flex flex-row mb-16 bottom-0 md:justify-center  flex-wrap items-center space-x-3 space-y-3 md:space-y-0 md:space-x-6">
                        {departments.map((dep, index) => (
                            <a href={`#${dep.split(' ').join('-')}`} key={index} className="ring-2 py-1 md:py-2 px-2 md:px-4 hover:bg-app-primary hover:text-white rounded-full font-Inter uppercase text-center font-light ring-blue-500 ring-inset">
                                {dep}
                            </a>
                        ))}
                    </div>
                    {ManagementStaff.length && (
                        <section id="management" className="flex flex-col mb-16">
                            <h1 className="text-4xl uppercase text-app-primary mb-10">Management</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {ManagementStaff.map((staff, index) => (
                                    <PeopleCard key={index} slug={staff.slug} image={ContentfulToUrl(staff.image)} name={staff.name} title={staff.title} />
                                ))}
                            </div>
                        </section>
                    )}

                    {CoachingStaff.length && (
                        <section id="coaching" className="flex flex-col mb-16">
                            <h1 className="text-4xl uppercase text-app-primary mb-10">Coaching</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {CoachingStaff.map((staff, index) => (
                                    <PeopleCard key={index} slug={staff.slug} image={ContentfulToUrl(staff.image)} name={staff.name} title={staff.title} />
                                ))}
                            </div>
                        </section>
                    )}

                    {RecruitingStaff.length && (
                        <section id="recruiting" className="flex flex-col mb-16">
                            <h1 className="text-4xl uppercase text-app-primary mb-10">Recruitment</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {RecruitingStaff.map((staff, index) => (
                                    <PeopleCard key={index} slug={staff.slug} image={ContentfulToUrl(staff.image)} name={staff.name} title={staff.title} />
                                ))}
                            </div>
                        </section>
                    )}
                    {PublicRelationsStaff.length && (
                        <section id="public-relations" className="flex flex-col mb-16">
                            <h1 className="text-4xl uppercase text-app-primary mb-10">Public Relations</h1>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {PublicRelationsStaff.map((staff, index) => (
                                    <PeopleCard key={index} slug={staff.slug} image={ContentfulToUrl(staff.image)} name={staff.name} title={staff.title} />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </PageWrapper>
    )
}

export default PeoplePage;
export const getStaticProps: GetStaticProps<StaffPageProps> = async () => {
    const client = new ContentfulClient()
    try {
        const staffs  = await client.getEntries<StaffEntry>('staffs');
        return {
            props: {
                staffs
            }
        }
    } catch (error) {
        return {
            notFound: true
        }
    }
}
