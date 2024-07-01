import { Metadata } from "next";
import Link from "next/link"
import { Button } from "~/components/ui/button"
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
    title: "Whutering Waves | Interval Guide",
    description: "guide for genshin impact",
    icons: {
        icon: dataMockApiImages.whutering.icon
    }
};

const page = () => {
    return (
        <div className="pt-20 container text-white">
            <Link href={'/'}>
                <Button
                    variant={'default'}
                >
                    go to genshin
                </Button>
            </Link>
        </div>
    )
}

export default page
