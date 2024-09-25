import Image from "next/image"
import Link from "next/link"
import { Badge, Card, CardContent } from "~/components/ui"
import { cn } from "~/utils"
import { CharacterListProps } from "./character-list"

const View = ({ data }: CharacterListProps) => {

    return (
        <section className="pt-6">
            <Card>
                <CardContent className="flex flex-wrap items-start px-3 pb-0 pt-6 md:p-5 lg:py-6">
                    {data.map(item => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className="relative flex flex-col items-center rounded-sm group px-[10px] py-4 md:px-4 xl:px-5"
                        >
                            <Image
                                src={item.thumbnail}
                                className={cn(
                                    "rounded-[4px] aspect-auto w-[60px] min-h-[50px] md:w-[70px] transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300",
                                    item.rarity === 4 && 'rarity-4',
                                    item.rarity === 5 && 'rarity-5',
                                )}
                                alt="clorinde"
                                width={100}
                                height={100}
                            />
                            <Image
                                src={String(item.element.thumbnail)}
                                className="bg-interval-purple-500 rounded-[50%] absolute w-[20px] md:w-[24px] top-2 right-0 xl:right-2 aspect-auto"
                                alt="element"
                                width={24}
                                height={24}
                            />
                            {item?.role?.thumbnail && (
                                <Image
                                    src={String(item?.role?.thumbnail)}
                                    className="bg-interval-purple-500 rounded-[50%] absolute w-[23px] md:w-[25px] top-2 left-0 xl:left-2 aspect-auto"
                                    alt="element"
                                    width={25}
                                    height={25}
                                />
                            )}
                            <p
                                className="text-sm pt-2 capitalize truncate max-w-[50px] md:max-w-[70px]">{item.hero}
                            </p>
                            {item.isNew && <Badge variant={'interval'} className="mt-1">New</Badge>}
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </section>
    )
}

export { View }
