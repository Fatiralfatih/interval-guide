import Image from "next/image"
import { Card, CardContent, CardHeader, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui"
import { genshinData } from "~/features/genshin"
import { cn } from "~/utils"

interface PageCharactersGenshin {
  params: {
    slug: string
  }
}

const Page = ({ params }: PageCharactersGenshin) => {

  const data = genshinData.find(item => item.hero === params.slug)

  return (
    <div className="bg-interval-purple-700 rounded-md px-4 pb-4 lg:px-5">
      {/* section profil hero */}
      <section className="relative">
        {/* thumbnail element */}
        <figure className="absolute top-3 right-0">
          <Image
            src={'https://rerollcdn.com/GENSHIN/UI/element_pyro.png'}
            alt={`thumbnail-${data?.hero}`}
            width={60}
            height={60}
            className={cn(
              "rounded-lg aspect-auto",
            )}
          />
        </figure>
        <div className="pt-5 flex flex-col gap-6 md:flex-row md:gap-4 md:items-center">
          {/* thumbnail hero */}
          <figure className="flex justify-center">
            <Image
              src={'https://rerollcdn.com/GENSHIN/Characters/1/Arlecchino.png'}
              className={cn(
                "rounded-lg aspect-auto rarity-5 w-[100px] h-[100px] md:w-[100px] md:h-[100px] lg:h-[110px] lg:w-[110px]",
                data?.rarity === 4 && 'rarity-4',
                data?.rarity === 5 && 'rarity-5',
              )}
              alt={`thumbnail-${data?.hero}`}
              width={120}
              height={120}
            />
          </figure>
          <div className="flex flex-col gap-4 md:gap-2">
            <h1
              className="text-[22px] font-medium md:text-2xl lg:text-[25px]"
            >
              Genshin Impact Arlecchino Build
            </h1>
            <div className="flex flex-col gap-3 md:flex-row">
              <figure className="bg-interval-purple-500/80 flex gap-2 items-center p-2 justify-center text-base text-zinc-300 rounded-sm md:px-3">
                <Image
                  src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                  alt="asd"
                  width={25}
                  height={25}
                />
                <figcaption>Polearm</figcaption>
              </figure>
              <div
                className="bg-interval-purple-500/80 flex gap-2 items-center p-2 justify-center text-base text-zinc-300 rounded-sm md:px-5"
              >
                Main DPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section material hero */}
      <section className="pt-6">
        <Card>
          <CardHeader className="p-0">
            <h4 className="text-amber-300 text-[15px]">Arlecchino Upgrade Materials</h4>
          </CardHeader>
          <CardContent className="p-0 grid pt-3 grid-cols-1 gap-[10px] md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={'https://rerollcdn.com/GENSHIN/Farming/NEW/Order.png'}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                Order
              </p>
            </div>

            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={'https://rerollcdn.com/GENSHIN/Farming/NEW/Fading_Candle.png'}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                Fading Candle
              </p>
            </div>

            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={'https://rerollcdn.com/GENSHIN/Farming/NEW/Agnidus_Agate_Sliver.png'}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                Agnidus Agate Sliver
              </p>
            </div>

            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={'https://rerollcdn.com/GENSHIN/Farming/NEW/Rainbow_Rose.png'}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                Rainbow Rose
              </p>
            </div>

            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={`https://rerollcdn.com/GENSHIN/Farming/NEW/Recruit's_Insignia.png`}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                {`Recruit's Insignia`}
              </p>
            </div>

            <div className="flex gap-2 bg-interval-purple-500 py-2 items-center justify-center lg:py-[6px] px-4 rounded-md">
              <Image
                className="lg:w-[37px]"
                src={`https://rerollcdn.com/GENSHIN/Farming/NEW/Fragment_of_a_Golden_Melody.png`}
                width={40}
                height={40}
                alt="asd"
              />
              <p className="text-[15px] text-zinc-300 capitalize">
                Fragment of a Golden Melody
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* section best weapon hero and section best Artifacts hero */}
      <TooltipProvider delayDuration={0}>
        <section className="pt-6 grid lg:grid-cols-2 lg:gap-x-10">
          {/* best weapon list */}
          <Card>
            <CardHeader
              className="p-0">
              <h4 className="text-amber-300 text-[15px]md:text-lg">Arlecchino Best Weapons</h4>
            </CardHeader>
            <CardContent className="p-0 pt-3 space-y-2.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      1
                    </p>
                    <Image
                      className="rarity-5 lg:w-[48px] rounded-md"
                      src={"https://rerollcdn.com/GENSHIN/Weapons/Crimson_Moon's_Semblance.png"}
                      width={50}
                      height={50}
                      alt="asd"
                    />
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      {"Crimson Moon's Semblance"}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">{"Crimson Moon's Semblance"}</h3>
                        <div className="flex items-center gap-2">
                          <figure className="p-2 bg-interval-purple-700 rounded-md">
                            <Image
                              src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                              alt="asd"
                              width={25}
                              height={25}
                            />
                          </figure>
                          <p className="text-base text-zinc-400">Crit Rate</p>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Weapons/Crimson_Moon's_Semblance.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5">
                      <article className="space-y-2">
                        <h4
                          className="text-amber-400 text-[16px]"
                        >
                          {"Ashen Sun's Shadow"}
                        </h4>
                        <p className="leading-7 text-[16px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eum architecto. Officia dolorum harum sit tenetur magni repellendus dolorem consectetur numquam esse porro architecto accusamus nemo officiis id vitae laboriosam blanditiis, magnam ipsum. Rerum dolorem ullam distinctio quisquam, obcaecati voluptas quidem ipsa molestiae vel neque.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      2
                    </p>
                    <Image
                      className="rarity-5 lg:w-[48px] rounded-md"
                      src={"https://rerollcdn.com/GENSHIN/Weapons/Primordial_Jade_Winged-Spear.png"}
                      width={50}
                      height={50}
                      alt="asd"
                    />
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Primordial Jade Winged-Spear
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Primordial Jade Winged-Spear
                        </h3>
                        <div className="flex items-center gap-2">
                          <figure className="p-2 bg-interval-purple-700 rounded-md">
                            <Image
                              src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                              alt="asd"
                              width={25}
                              height={25}
                            />
                          </figure>
                          <p className="text-base text-zinc-400">Crit Rate</p>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Weapons/Primordial_Jade_Winged-Spear.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5">
                      <article className="space-y-2">
                        <h4
                          className="text-amber-400 text-[16px]"
                        >
                          {"Ashen Sun's Shadow"}
                        </h4>
                        <p className="leading-7 text-[16px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eum architecto. Officia dolorum harum sit tenetur magni repellendus dolorem consectetur numquam esse porro architecto accusamus nemo officiis id vitae laboriosam blanditiis, magnam ipsum. Rerum dolorem ullam distinctio quisquam, obcaecati voluptas quidem ipsa molestiae vel neque.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      3
                    </p>
                    <Image
                      className="rarity-5 lg:w-[48px] rounded-md"
                      src={"https://rerollcdn.com/GENSHIN/Weapons/Staff_of_the_Scarlet_Sands.png"}
                      width={50}
                      height={50}
                      alt="asd"
                    />
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Staff of the Scarlet Sands
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Staff of the Scarlet Sands
                        </h3>
                        <div className="flex items-center gap-2">
                          <figure className="p-2 bg-interval-purple-700 rounded-md">
                            <Image
                              src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                              alt="asd"
                              width={25}
                              height={25}
                            />
                          </figure>
                          <p className="text-base text-zinc-400">Crit Rate</p>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Weapons/Staff_of_the_Scarlet_Sands.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5">
                      <article className="space-y-2">
                        <h4
                          className="text-amber-400 text-[16px]"
                        >
                          {"Ashen Sun's Shadow"}
                        </h4>
                        <p className="leading-7 text-[16px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eum architecto. Officia dolorum harum sit tenetur magni repellendus dolorem consectetur numquam esse porro architecto accusamus nemo officiis id vitae laboriosam blanditiis, magnam ipsum. Rerum dolorem ullam distinctio quisquam, obcaecati voluptas quidem ipsa molestiae vel neque.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      4
                    </p>
                    <Image
                      className="rarity-4 lg:w-[48px] rounded-md"
                      src={"https://rerollcdn.com/GENSHIN/Weapons/Deathmatch.png"}
                      width={50}
                      height={50}
                      alt="asd"
                    />
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Deathmatch
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Deathmatch
                        </h3>
                        <div className="flex items-center gap-2">
                          <figure className="p-2 bg-interval-purple-700 rounded-md">
                            <Image
                              src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                              alt="asd"
                              width={25}
                              height={25}
                            />
                          </figure>
                          <p className="text-base text-zinc-400">Crit Rate</p>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-4 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Weapons/Deathmatch.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5">
                      <article className="space-y-2">
                        <h4
                          className="text-amber-400 text-[16px]"
                        >
                          {"Ashen Sun's Shadow"}
                        </h4>
                        <p className="leading-7 text-[16px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eum architecto. Officia dolorum harum sit tenetur magni repellendus dolorem consectetur numquam esse porro architecto accusamus nemo officiis id vitae laboriosam blanditiis, magnam ipsum. Rerum dolorem ullam distinctio quisquam, obcaecati voluptas quidem ipsa molestiae vel neque.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-indigo-700/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      5
                    </p>
                    <Image
                      className="rarity-4 lg:w-[48px] rounded-md"
                      src={"https://rerollcdn.com/GENSHIN/Weapons/Blackcliff_Pole.png"}
                      width={50}
                      height={50}
                      alt="asd"
                    />
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Blackcliff Pole
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Blackcliff Pole
                        </h3>
                        <div className="flex items-center gap-2">
                          <figure className="p-2 bg-interval-purple-700 rounded-md">
                            <Image
                              src={'https://rerollcdn.com/GENSHIN/UI/weapon_polearm.png'}
                              alt="asd"
                              width={25}
                              height={25}
                            />
                          </figure>
                          <p className="text-base text-zinc-400">Crit Rate</p>
                        </div>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-4 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Weapons/Blackcliff_Pole.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5">
                      <article className="space-y-2">
                        <h4
                          className="text-amber-400 text-[16px]"
                        >
                          {"Ashen Sun's Shadow"}
                        </h4>
                        <p className="leading-7 text-[16px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eum architecto. Officia dolorum harum sit tenetur magni repellendus dolorem consectetur numquam esse porro architecto accusamus nemo officiis id vitae laboriosam blanditiis, magnam ipsum. Rerum dolorem ullam distinctio quisquam, obcaecati voluptas quidem ipsa molestiae vel neque.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-indigo-700/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>
            </CardContent>
          </Card>

          {/* best artifacts list */}
          <Card className="pt-6 lg:pt-0">
            <CardHeader
              className="p-0">
              <h4 className="text-amber-300 text-[15px]md:text-lg">Arlecchino Best Artifacts</h4>
            </CardHeader>
            <CardContent className="p-0 pt-3 space-y-2.5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      1
                    </p>
                    <div className="relative">
                      <Image
                        className="rarity-5  rounded-md lg:w-[48px]"
                        src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                        width={50}
                        height={50}
                        alt="asd"
                      />
                      <p
                        className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                      >
                        4
                      </p>
                    </div>
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Fragment of Harmonic Whimsy
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Fragment of Harmonic Whimsy
                        </h3>
                        <p className="text-base text-zinc-400">
                          Artefak Set
                        </p>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5 space-y-4">
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                          2
                        </h4>
                        <p className="text-base text-zinc-300">ATK +18%</p>
                      </article>
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                          4
                        </h4>
                        <p className="text-base text-zinc-300 leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      2
                    </p>
                    <div className="relative">
                      <Image
                        className="rarity-5  rounded-md lg:w-[48px]"
                        src={"https://rerollcdn.com/GENSHIN/Gear/gladiator's_finale.png"}
                        width={50}
                        height={50}
                        alt="asd"
                      />
                      <p
                        className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                      >
                        4
                      </p>
                    </div>
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      {"Gladiator's Finale"}
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Fragment of Harmonic Whimsy
                        </h3>
                        <p className="text-base text-zinc-400">
                          Artefak Set
                        </p>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5 space-y-4">
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                          2
                        </h4>
                        <p className="text-base text-zinc-300">ATK +18%</p>
                      </article>
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                          4
                        </h4>
                        <p className="text-base text-zinc-300 leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex gap-3 bg-interval-purple-500 items-center rounded-md md:justify-start px-2">
                    <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                      3
                    </p>
                    <div className="relative">
                      <Image
                        className="rarity-5  rounded-md lg:w-[48px]"
                        src={"https://rerollcdn.com/GENSHIN/Gear/gilded_dreams.png"}
                        width={50}
                        height={50}
                        alt="asd"
                      />
                      <p
                        className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                      >
                        4
                      </p>
                    </div>
                    <p className="text-[15px] text-zinc-300 capitalize min-w-[100px] truncate">
                      Gilded Dreams
                    </p>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Fragment of Harmonic Whimsy
                        </h3>
                        <p className="text-base text-zinc-400">
                          Artefak Set
                        </p>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5 space-y-4">
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                          2
                        </h4>
                        <p className="text-base text-zinc-300">ATK +18%</p>
                      </article>
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                          4
                        </h4>
                        <p className="text-base text-zinc-300 leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center bg-interval-purple-500 px-2 gap-1 rounded-md md:justify-between lg:justify-normal">
                    <div className="flex gap-3 items-center rounded-md md:justify-start">
                      <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                        4
                      </p>
                      <div className="relative w-[48px]">
                        <Image
                          className="rarity-5 w-full rounded-md aspect-auto"
                          src={"https://rerollcdn.com/GENSHIN/Gear/crimson_witch_of_flames.png"}
                          width={100}
                          height={100}
                          alt="asd"
                        />
                        <p
                          className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                        >
                          2
                        </p>
                      </div>
                      <p className="text-[15px] text-zinc-300 capitalize truncate max-w-[60px] sm:max-w-[150px] md:max-w-full lg:max-w-[100px]">
                        Crimson Witch of Flames
                      </p>
                    </div>
                    <div className="flex gap-3 items-center rounded-md md:justify-start px-2">
                      <div className="relative w-[48px]">
                        <Image
                          className="rarity-5 w-full rounded-md aspect-auto"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={100}
                          height={100}
                          alt="asd"
                        />
                        <p
                          className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                        >
                          2
                        </p>
                      </div>
                      <p className="text-[15px] text-zinc-300 capitalize truncate max-w-[60px] sm:max-w-[150px] md:max-w-full lg:max-w-[100px]">
                        Fragment of Harmonic Whimsy
                      </p>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  align="end"
                  side="top"
                  className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                >
                  <Card className="px-2 pb-5 bg-interval-purple-800">
                    <CardHeader className="p-0 flex-row gap-2 justify-between">
                      <div className="space-y-2 pt-3">
                        <h3 className="text-lg">
                          Fragment of Harmonic Whimsy
                        </h3>
                        <p className="text-base text-zinc-400">
                          Artefak Set
                        </p>
                      </div>
                      <figure className="">
                        <Image
                          className="rarity-5 rounded-md"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={75}
                          height={75}
                          alt="asd"
                        />
                      </figure>
                    </CardHeader>
                    <CardContent className="p-0 pt-5 space-y-4">
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                          2
                        </h4>
                        <p className="text-base text-zinc-300">ATK +18%</p>
                      </article>
                      <article className="flex gap-5 items-start">
                        <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                          4
                        </h4>
                        <p className="text-base text-zinc-300 leading-7">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                        </p>
                      </article>
                    </CardContent>
                  </Card>

                  <div
                    className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                  />
                </TooltipContent>
              </Tooltip>

              <div className="flex items-center bg-interval-purple-500 px-2 gap-1 rounded-md md:justify-between lg:justify-normal">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex gap-3 items-center rounded-md md:justify-start">
                      <p className="text-sm py-[3px] px-[9px] bg-interval-purple-400 rounded-md">
                        4
                      </p>
                      <div className="relative w-[48px]">
                        <Image
                          className="rarity-5 w-full rounded-md aspect-auto"
                          src={"https://rerollcdn.com/GENSHIN/Gear/crimson_witch_of_flames.png"}
                          width={100}
                          height={100}
                          alt="asd"
                        />
                        <p
                          className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                        >
                          2
                        </p>
                      </div>
                      <p className="text-[15px] text-zinc-300 capitalize truncate max-w-[60px] sm:max-w-[150px] md:max-w-full lg:max-w-[100px]">
                        Crimson Witch of Flames
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    align="end"
                    side="top"
                    className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                  >
                    <Card className="px-2 pb-5 bg-interval-purple-800">
                      <CardHeader className="p-0 flex-row gap-2 justify-between">
                        <div className="space-y-2 pt-3">
                          <h3 className="text-lg">
                            Fragment of Harmonic Whimsy
                          </h3>
                          <p className="text-base text-zinc-400">
                            Artefak Set
                          </p>
                        </div>
                        <figure className="">
                          <Image
                            className="rarity-5 rounded-md"
                            src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                            width={75}
                            height={75}
                            alt="asd"
                          />
                        </figure>
                      </CardHeader>
                      <CardContent className="p-0 pt-5 space-y-4">
                        <article className="flex gap-5 items-start">
                          <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                            2
                          </h4>
                          <p className="text-base text-zinc-300">ATK +18%</p>
                        </article>
                        <article className="flex gap-5 items-start">
                          <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                            4
                          </h4>
                          <p className="text-base text-zinc-300 leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                          </p>
                        </article>
                      </CardContent>
                    </Card>

                    <div
                      className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                    />
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex gap-3 items-center rounded-md md:justify-start px-2">
                      <div className="relative w-[48px]">
                        <Image
                          className="rarity-5 w-full rounded-md aspect-auto"
                          src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                          width={100}
                          height={100}
                          alt="asd"
                        />
                        <p
                          className="absolute bottom-0 right-0 bg-zinc-800 w-5 text-center text-sm rounded-sm"
                        >
                          2
                        </p>
                      </div>
                      <p className="text-[15px] text-zinc-300 capitalize truncate max-w-[60px] sm:max-w-[150px] md:max-w-full lg:max-w-[100px]">
                        Fragment of Harmonic Whimsy
                      </p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    align="end"
                    side="top"
                    className="bg-interval-purple-800 p-2 max-w-xs relative rounded-md md:max-w-sm"
                  >
                    <Card className="px-2 pb-5 bg-interval-purple-800">
                      <CardHeader className="p-0 flex-row gap-2 justify-between">
                        <div className="space-y-2 pt-3">
                          <h3 className="text-lg">
                            Fragment of Harmonic Whimsy
                          </h3>
                          <p className="text-base text-zinc-400">
                            Artefak Set
                          </p>
                        </div>
                        <figure className="">
                          <Image
                            className="rarity-5 rounded-md"
                            src={"https://rerollcdn.com/GENSHIN/Gear/fragment_of_harmonic_whimsy.png"}
                            width={75}
                            height={75}
                            alt="asd"
                          />
                        </figure>
                      </CardHeader>
                      <CardContent className="p-0 pt-5 space-y-4">
                        <article className="flex gap-5 items-start">
                          <h4 className="py-1 px-[12px] bg-green-600 text-sm rounded-sm text-zinc-50">
                            2
                          </h4>
                          <p className="text-base text-zinc-300">ATK +18%</p>
                        </article>
                        <article className="flex gap-5 items-start">
                          <h4 className="py-1 px-[12px] bg-green-600 text-base rounded-sm text-zinc-50">
                            4
                          </h4>
                          <p className="text-base text-zinc-300 leading-7">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eaque eum, tempore magnam ab amet.
                          </p>
                        </article>
                      </CardContent>
                    </Card>

                    <div
                      className="bg-amber-500/80 w-full p-1 absolute left-0 right-0 bottom-0"
                    />
                  </TooltipContent>
                </Tooltip>
              </div>

            </CardContent>
          </Card>
        </section>
      </TooltipProvider>
    </div >
  )
}

export default Page
