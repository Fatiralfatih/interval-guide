import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="container pt-20">
      <Link href={'/whutering'}>
        <Button
          variant={'ghost'}
          className="capitalize"
        >
          go to whutering
        </Button>
      </Link>

      <Link href={'/honkai-star-rail'}>
        <Button
          variant={'ghost'}
          className="capitalize"
        >
          go to whutering
        </Button>
      </Link>
    </main>
  );
}
