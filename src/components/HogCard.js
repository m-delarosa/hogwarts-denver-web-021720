import React from "react"
import "../App.css"

function HogCard(props) {
    const { hog, action, removeHog } = props


    function handleClick() {
        console.log("Card clicked!")
        action(hog) //This is going to be a prop.
    }

    function removeCard(e) {
        e.stopPropagation()
        console.log("Red X Clicked")
        removeHog(hog)
    }

    return (
        <div className="ui column pig-card">
            <div
                className="ui card"
                key={props.hog.id}
                onClick={handleClick}
            >
                <div className="image">
                    <img alt="oh no!" src={props.hog.image} />
                </div>
                <div className="content">
                    <div className="header">
                        {props.hog.name}
                    </div>
                    <div className="meta text-wrap">
                        <small>Highest Medal Acheived: {props.hog.highest_medal_achieved}</small>
                    </div>
                    <div className="meta text-wrap">
                        <small>Specialty: {props.hog.specialty}</small>
                    </div>
                </div>
                <div className="extra content">
                    <span>
                        Greased: {props.hog.greased}
                    </span>

                    <span>
                        Weight: {props.hog.weight} Metric Tons
                    </span>
                    <span>
                        <div className="ui center aligned segment basic">
                            <button
                                className="ui mini red button"
                                onClick={removeCard}
                            >
                                x
              </button>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HogCard
