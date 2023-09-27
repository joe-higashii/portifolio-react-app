import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                        src="https://media.graphassets.com/Q4lS2mPkT4Kw3BHM6Ba5"
                        width={40}
                        height={40}
                        className="rounded-full"
                        alt="Logo da empresa Workwolf"
                    />
                </div>

                <div className="h-full w-[1px] bg-gray-800" />
            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
<a href="">
    @ Cubos Academy
</a>
                </div>
            </div>
        </div>
    )
}