import Link from "next/link"
import { Button } from "~/components/ui/button"

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
