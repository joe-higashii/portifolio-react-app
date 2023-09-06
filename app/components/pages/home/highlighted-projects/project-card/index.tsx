import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import Link from "next/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="w-full h-full">
                <Image
                    width={420}
                    height={304}
                    src="https://media.graphassets.com/z3TrGsqwRAC3GKuU8c99"
                    alt="Thumbnail do projeto 1"
                    className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
                />
            </div>

            <div>
                <h3 className="flex item-center gap-3 font-medium text-lg text-gray-50">
                    <Image
                        width={20}
                        height={20}
                        alt=""
                        src="/images/icons/project-title-icon.svg"
                    />
                    GeoCode
                </h3>
                <p className="text-gray-400 my-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia dolore nemo, sunt perspiciatis delectus facere illo quam deserunt! Saepe, consequuntur!
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                    <TechBadge name="Next.js" />
                </div>

                <Link href="/projects/Geocode">
                    Ver projeto
                    <HiArrowNarrowRight />
                </Link>

            </div>
        </div>
    )
}