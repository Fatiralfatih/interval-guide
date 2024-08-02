import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '~/components/ui'

export const metadata: Metadata = {
    title: '404 Not Found',
}

const NotFound = () => {
    return (
        <main className='min-h-screen flex justify-center  text-white'>
            <section className='flex flex-col gap-4 bg-interval-purple-700 p-20 h-fit'>
                <h2 className=''>404 Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <Button>
                        Return Home
                    </Button>
                </Link>
            </section>
        </main>
    )
}

export default NotFound