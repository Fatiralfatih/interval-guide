import Link from "next/link"
import { Button } from "~/components/ui/button"

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
