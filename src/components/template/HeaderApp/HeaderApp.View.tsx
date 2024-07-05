import Image from "next/image"
import { LuSearch } from "react-icons/lu"
import { Button, Input, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui"
import { cn } from "~/utils"
import type { HeaderAppProps } from "./HeaderApp"

const View = ({
    titleHeader,
    listElements,
    listStars,
    listWeapons,
    descriptionHeader,
    listRoles,
}: HeaderAppProps) => {
    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-6  lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-2">
                    <h1
                        className="text-[22px] leading-none font-medium lg:text-2xl"
                    >
                        {titleHeader} Characters List
                    </h1>
                    {descriptionHeader &&
                        <p className="font-light text-gray-300 text-base">{descriptionHeader}</p>
                    }

                </div>
                <div className="w-full lg:w-fit">
                    <div className="relative flex-1 ">
                        <LuSearch className="absolute left-4 top-3 h-4 w-4" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="ps-12 lg:w-[350px]"
                        />
                    </div>
                </div>
            </div>

            {/* list stars, elements and weapons */}
            <div className="bg-interval-purple-500 flex flex-col justify-center items-center px-4 rounded-md md:flex-row md:pe-2">
                <TooltipProvider>
                    {/* star */}
                    <div className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:pe-3 md:py-1">
                        <ul className="flex md:border-r md:border-r-interval-purple-400 px-2">
                            {listStars.map((star) => (
                                <li
                                    className={cn(
                                        "rounded-sm",
                                        // 'asd' ? 'md:border-r md:border-r-interval-purple-400 md:pe-4' : 'md: border-none'
                                    )}
                                    key={star.title}
                                >
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <figure
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300
                          h-9 px-[7px] bg-interval-purple-600 text-zinc-50 hover:bg-interval-purple-400 cursor-pointer"
                                            >
                                                <Image
                                                    src={star.thumbnail}
                                                    alt={star.title}
                                                    className="md:w-[30px] aspect-auto"
                                                    width={25}
                                                    height={25}
                                                />
                                            </figure>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            {star.title}
                                        </TooltipContent>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* elements */}
                    <div className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:pe-3 md:py-1">
                        <ul className="flex md:border-r md:border-r-interval-purple-400 px-2">
                            {listElements.map(element => (
                                <li
                                    key={element.title}
                                >
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant={'interval-purple'}
                                                size={'sm'}
                                                className="h-10"
                                            >
                                                <Image
                                                    src={String(element.thumbnail)}
                                                    alt={'thumbnail' + element.title}
                                                    className="md:w-[30px] aspect-auto"
                                                    width={25}
                                                    height={25}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent className="capitalize">
                                            {element.title}
                                        </TooltipContent>
                                    </Tooltip>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* roles */}
                    {listRoles && (
                        <div className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:pe-3 md:py-1">
                            <ul className="flex md:border-r md:border-r-interval-purple-400 px-2">
                                {listRoles?.map(element => (
                                    <li
                                        key={element.title}
                                    >
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant={'interval-purple'}
                                                    size={'sm'}
                                                    className="h-10"
                                                >
                                                    <Image
                                                        src={String(element.thumbnail)}
                                                        alt={'thumbnail' + element.title}
                                                        className="md:w-[30px] aspect-auto"
                                                        width={25}
                                                        height={25}
                                                    />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent className="capitalize">
                                                {element.title}
                                            </TooltipContent>
                                        </Tooltip>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* weapons */}
                    <ul className="flex py-3 w-full justify-center items-center md:w-fit md:border-b-0 md:px-0 md:py-1">
                        {listWeapons.map(weapon => (
                            <li
                                key={weapon.title}
                                className="rounded-sm"
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant={'interval-purple'}
                                            size={'sm'}
                                            className="h-10 "
                                        >
                                            <Image
                                                src={String(weapon.thumbnail)}
                                                alt={'thumbnail' + weapon.title}
                                                className="md:w-[30px]"
                                                width={25}
                                                height={25}
                                            />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent className="capitalize">
                                        {weapon.title}
                                    </TooltipContent>
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                </TooltipProvider>
            </div>
        </section>
    )
}

export { View }
