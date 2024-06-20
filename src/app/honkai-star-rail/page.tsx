import { Metadata } from "next";
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
    title: "Honkai Star Rail | Interval Guide",
    description: "guide for genshin impact",
    icons: {
        icon: dataMockApiImages.honkaiSTR.icon
    }
};

const Page = () => {
    return (
        <div className="pt-32 space-x-4">
            <Link href={'/'}>
                <Button>
                    Goto genshin
                </Button>
            </Link>
            <Link href={'/whutering'}>
                <Button>
                    Goto whutering
                </Button>
            </Link>
        </div>
    )
}

export default Page
