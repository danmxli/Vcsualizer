const CardSkeletons = () => {
    return (
        <div className="m-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="w-full h-44 bg-neutral-800 animate-pulse rounded-lg">
                </div>
            ))}
        </div>
    )
}

export default CardSkeletons