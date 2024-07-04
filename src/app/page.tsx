import { LuSearch } from "react-icons/lu";
import { Badge, Button, Card, CardContent, Input, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui";
import { genshinData, listElementsGenshin, listStarsGenshin, listWeaponsGenshin } from "~/features/genshin/utils";
import Image from "next/image";
import { cn } from "~/utils";
import Link from "next/link";

const HomePage = () => {

  return (
    <>
      {/* header app */}
      <section className="space-y-6">
        <div className="flex flex-col gap-6 lg:items-center lg:flex-row lg:justify-between">
          <h1
            className="text-[22px] leading-none font-medium lg:text-2xl"
          >
            Genshin Impact Characters List
          </h1>
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

        {/* list all lala */}
        <div className="bg-interval-purple-500 flex flex-col justify-center items-center px-4 rounded-md md:flex-row md:pe-2">
          <TooltipProvider>
            {/* star */}
            <div className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:pe-3 md:py-1">
              <ul className="flex md:border-r md:border-r-interval-purple-400">
                {listStarsGenshin.map((star) => (
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
            <ul className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:px-1 md:py-1">
              {listElementsGenshin.map(element => (
                <li
                  className={cn(
                    // for border right
                    element.title === "pyro" && 'md:border-r md:pe-3 md:border-r-interval-purple-400'
                  )}
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

            {/* weapons */}
            <ul className="flex py-3 w-full justify-center items-center md:w-fit md:border-b-0 md:px-2 md:py-1">
              {listWeaponsGenshin.map(weapon => (
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

      {/* characters list */}
      <section className="pt-6">
        <Card>
          <CardContent className="flex flex-wrap items-start px-3 pb-0 pt-6 md:p-5 lg:py-6">
            {genshinData.map(genshin => (
              <Link
                key={genshin.id}
                href={'#'}
                className="relative flex flex-col items-center rounded-sm group px-[10px] py-4 md:px-4 xl:px-5"
              >
                <Image
                  src={genshin.thumbnail}
                  className={cn(
                    "rounded-[4px] aspect-auto w-[60px] min-h-[50px] md:w-[70px] transition ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110 duration-300",
                    genshin.rarity === 4 && 'rarity-4',
                    genshin.rarity === 5 && 'rarity-5',
                  )}
                  alt="clorinde"
                  width={100}
                  height={100}
                />
                <Image
                  src={String(genshin.element.thumbnail)}
                  className="bg-interval-purple-500 rounded-[50%] absolute w-[20px] md:w-[24px] top-2 right-0 xl:right-2"
                  alt="element"
                  width={24}
                  height={24}
                />
                <p
                  className="text-sm pt-2 capitalize truncate max-w-[50px] md:max-w-[70px]">{genshin.hero}
                </p>
                {genshin.isNew && <Badge variant={'interval'} className="mt-1">New</Badge>}
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default HomePage
