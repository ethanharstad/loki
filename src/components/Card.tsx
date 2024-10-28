import type { TCardOptions } from "../entities/Card"

export function Card({ faceSideUrl, text, subtext }: TCardOptions) {
    return (
        <div className="card__container">
            <img className="card__img" src={faceSideUrl} />
            <div className="card__text">{text}</div>
            <div className="card__subtext">{subtext}</div>
        </div>
    )
}
