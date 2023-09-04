type TechBadgeProps = {
    name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
    return (
        <span className="text-emerald-400 bg-emerald-900/80 rounded-md">
            {name}
        </span>
    )
}