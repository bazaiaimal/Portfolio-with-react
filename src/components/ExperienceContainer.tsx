
type ExperienceProps = {
    title: string,
    presentDate: string,
    text: string,
}


export const ExperienceContainer = ( { title, presentDate, text }: ExperienceProps) => {
    return (
        <>
            <div className="single-about">
                <div className="tittle-experience">
                    <h2>{title}</h2>
                    <p>{presentDate}</p>
                </div>
                <div className="bottom-pera">
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
