type CardProps = {
    onCardClick: (e: any) => void;
    isActive: any;
    label: string;
    bgColor: string;
}

export const Card = ({
    onCardClick,
    isActive,
    bgColor,
    label
}: CardProps) => {
    return (
        <div className={`px-4 cursor-pointer py-2 border border-stone-600 bg-slate-50 h-fit text-black rounded-lg font-outfit ${isActive && bgColor}`}
            onClick={onCardClick}
        >
            {label}
        </div>
    )
}