import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
    return (
        <section className="container py-16 flex gap-16">
            <div className="max-w-[420px]">
                <SectionTitle
                    subtitle="experiências"
                    title="Exériência Profissional"
                    className={""}
                />
                <p className="text-gray-400 mt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo, excepturi quae dolor sequi enim aperiam animi dolorem at eum quod odio voluptates ipsum sed suscipit deleniti nemo provident? Possimus qui reiciendis vel enim odio sint dolor animi quis quos iste, placeat, et excepturi praesentium, laboriosam doloribus fugit labore molestiae.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <ExperienceItem />
                <ExperienceItem />
            </div>
        </section>
    )
}