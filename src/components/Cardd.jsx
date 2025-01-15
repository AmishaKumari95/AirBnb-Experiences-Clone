import React from 'react'

export default function Cardd(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img 
                src={props.coverImg}
                className='card--image'
                alt='Image of Katie Zaferes'
            />
            <div className="card-stats">
                <img 
                src="/assets/Star1.png"
                className="card--star" 
                alt='Star icon'
                />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) . </span>
                <span>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
         </div>
    )
}