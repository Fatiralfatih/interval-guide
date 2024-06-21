import { LuSearch } from "react-icons/lu";
import { Badge, Button, Card, CardContent, Input, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui";
import { FaStar } from "react-icons/fa";
import { genshinData, listElements, listWeapons } from "~/features/genshin/utils";
import Image from "next/image";
import { cn } from "~/utils";
import Link from "next/link";

const HomePage = () => {

  return (
    <main className="pt-32 container md:px-6 lg:px-10 xl:px-52">
      <div className=" bg-interval-purple-800 p-5 md:p-6 md:py-10 lg:p-7 rounded-md">
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

          {/* list all alala */}
          <div className="bg-interval-purple-500 flex flex-col justify-center items-center px-4 rounded-md md:flex-row md:pe-2">
            <TooltipProvider>
              {/* star */}
              <ul className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:pe-3 md:py-1">
                <li className="rounded-sm">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={'interval-purple'}
                        size={'sm'}
                        className="h-10 "
                      >
                        <FaStar className="text-xl text-pink-400 md:text-2xl" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      4 Star
                    </TooltipContent>
                  </Tooltip>
                </li>
                <li className=" md:border-r md:border-r-interval-purple-400 md:pe-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={'interval-purple'}
                        size={'sm'}
                        className="h-10 "
                      >
                        <FaStar className="text-xl text-yellow-500 md:text-2xl" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      5 Star
                    </TooltipContent>
                  </Tooltip>
                </li>
              </ul>

              {/* elements */}
              <ul className="flex py-3 w-full justify-center items-center border-b border-interval-purple-400 md:w-fit md:border-b-0 md:px-1 md:py-1">
                {listElements.map(element => (
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

        {/* characters list */}
        <section className="pt-6">
          <Card>
            <CardContent className="flex flex-wrap items-start p-6 gap-5 md:gap-x-10 md:gap-y-8 lg:px-8 lg:py-6 lg:gap-x-[43px]">
              {genshinData.map(genshin => (
                <Link
                  key={genshin.id}
                  href={'#'}
                  className="relative flex flex-col items-center rounded-sm"
                >
                  <Image
                    src={genshin.thumbnail}
                    className={cn(
                      "rounded-[4px] aspect-auto w-[60px] min-h-[50px] md:w-[70px]",
                      genshin.rarity === 4 && 'rarity-4',
                      genshin.rarity === 5 && 'rarity-5',
                    )}
                    alt="clorinde"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={String(genshin.element.thumbnail)}
                    className="bg-interval-purple-500 rounded-[50%] absolute -top-2 -right-2"
                    alt="element"
                    width={24}
                    height={24}
                  />
                  <p className="text-sm pt-3 capitalize truncate max-w-[50px] md:max-w-[70px]">{genshin.hero}</p>
                  {genshin.isNew && <Badge variant={'interval'} className="mt-1">New</Badge>}
                </Link>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}

export default HomePage
