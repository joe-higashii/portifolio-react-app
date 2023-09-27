import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] fkex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image
                width={380}
                height={200}
                src="https://media.graphassets.com/z3TrGsqwRAC3GKuU8c99"
                alt="Thumbnail do projeto GeoCode"
                unoptimized
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">GeoCode</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia cupiditate iusto pariatur ducimus vel dolor quasi ratione odio rem.</p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Javascript, Typescript, React, CSS, HTML, PostgreSQL</span>
            </div>
        </div>
    )
}