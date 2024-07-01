import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-interval-purple-800">
            <section className="container flex flex-col pb-8 mt-8 p-6 gap-6 md:flex-row md:gap-14 md:py-6 md:px-10 lg:justify-center lg:px-14 lg:gap-32 lg:py-8">
                <article className="space-y-3 md:max-w-[280px] lg:max-w-lg">
                    <Link href={'/'}>
                        <h1 className="text-2xl font-semibold">INTERVAL.GG</h1>
                    </Link>
                    <p className="text-zinc-300 leading-[30px]">
                        <span className="text-zinc-100 font-medium">INTERVAL.GG </span>
                        is not affiliated with or endorsed by miHoYo. <span className="text-zinc-100 font-medium">INTERVAL.GG </span> is a Database and Tier List website for INTERVAL Impact, Honkai: Star Rail, Zenless Zone Zero, and Wuthering Waves.
                    </p>
                    <p className="text-zinc-300"> &copy; INTERVAL.GG {new Date().getFullYear()}</p>
                </article>

                <article className="space-y-4 md:w-full lg:w-fit">
                    <h3 className="text-zinc-50 font-[500]">More Links</h3>
                    <ul className="space-y-3">
                        <li className="text-zinc-300 hover:text-zinc-50">
                            <Link href={'#'}>
                                Contact
                            </Link>
                        </li>
                        <li className="text-zinc-300 hover:text-zinc-50">
                            <Link href={'#'}>
                                Privacy Police
                            </Link>
                        </li>
                    </ul>
                </article>

                <article className="space-y-4 md:w-full lg:w-fit">
                    <h3 className="text-zinc-50 font-[500]">Comunnity Links</h3>
                    <ul className="space-y-3">
                        <li className="text-zinc-300 hover:text-zinc-50">
                            <Link href={'#'}>
                                Discord
                            </Link>
                        </li>
                        <li className="text-zinc-300 hover:text-zinc-50">
                            <Link href={'#'}>
                                Reddit
                            </Link>
                        </li>
                    </ul>
                </article>
            </section>
        </footer>
    )
}

export { Footer }
