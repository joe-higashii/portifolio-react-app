import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandReact, TbBrandTypescript } from "react-icons/tb"
import { FaJava, FaNode } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsGit } from 'react-icons/bs';
import { SectionTitle } from "../../section-title"
import { KnownTech } from "./known-tech"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" className={""} />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
                {[
                    {
                        icon: <TbBrandNextjs />,
                        name: 'Next.js',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <FaNode />,
                        name: 'Node.js',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <TbBrandJavascript />,
                        name: 'JavaScript',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <TbBrandTypescript />,
                        name: 'TypeScript',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <TbBrandHtml5 />,
                        name: 'HTML',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <TbBrandCss3 />,
                        name: 'CSS',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <TbBrandReact />,
                        name: 'React',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <FaJava />,
                        name: 'Java',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <BiLogoPostgresql />,
                        name: 'PostgreSQL',
                        startDate: '2023-01-01',
                    },
                    {
                        icon: <BsGit />,
                        name: 'GIT',
                        startDate: '2023-01-01',
                    },
                ].map((tech, index) => (
                    <KnownTech key={index} tech={tech} />
                ))}
            </div>

        </section>
    )
}