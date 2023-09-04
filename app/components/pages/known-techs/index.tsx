import { TbBrandNextjs } from "react-icons/tb"
import { SectionTitle } from "../../section-title"
import { KnownTech } from "./known-tech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" className={""} />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
                {Array.from({ length: 9 }).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs />,
                        name: 'Next.js',
                        startDate: '2023-01-01'
                    }} />
                ))}
            </div>
        </section>
    )
}