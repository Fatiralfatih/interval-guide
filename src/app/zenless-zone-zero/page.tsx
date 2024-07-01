import { Metadata } from "next"
import { dataMockApiImages } from "~/utils";

export const metadata: Metadata = {
  title: "Zenless Zone Zero | Interval Guide",
  description: "guide for genshin impact",
  icons: {
    icon: dataMockApiImages.zenlessZoneZero.icon
  }
};

const page = () => {
  return (
    <div>

    </div>
  )
}

export default page
