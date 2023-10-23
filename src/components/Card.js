import React from "react"

export default function Card(props) {
    let badgeText
    if (props.each_data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.each_data.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props)
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.each_data.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.each_data.stats.rating}</span>
                <span className="gray">({props.each_data.stats.reviewCount}) • </span>
                <span className="gray">{props.each_data.location}</span>
            </div>
            <p className="card--title">{props.each_data.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.each_data.price}</span> / person
            </p>
        </div>
    )
}