import Link from "next/link";

export const HeadCoachSection = () => {
    return (
        <section className="bg-gradient-to-b from-app-primary to-app-secondary text-white py-16">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl lg:text-6xl fleading-tight mb-6">
                            Welcome to Milkyway Football Academy
                        </h2>
                        <p className=" font-Inter font-light text-xl mb-8">
                            We nurture young football talent to reach their full potential. Our state-of-the-art facilities, expert coaching staff, and dedication to excellence make us a leading academy in Kano, Nigeria.
                        </p>
                        <Link href="/information/about" >
                            <div className="bg-yellow-400 max-w-[150px] text-center text-blue-900 hover:bg-yellow-500 rounded-full py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105">
                                Learn More
                            </div>
                        </Link>
                    </div>

                    <div className="lg:w-1/2 mt-10 lg:mt-0">
                        <img src="/white.png" alt="Milkyway Football Academy" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
