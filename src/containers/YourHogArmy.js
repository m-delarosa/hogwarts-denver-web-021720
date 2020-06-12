import React from "react"
import HogCard from '../components/HogCard'


function YourHogArmy(props) {
    const displayHogCards = props.hogArmy.map(hog => {
        return <HogCard hog={hog} action={props.removeHogFromArmy} removeHog={props.removeHogPermanently} />
    })

    return (
        <div className="ui segment inverted olive hog-army">
            <div className="ui five column grid">
                <div className="row hog-army-row">
                    {displayHogCards}
                </div>
            </div>
        </div>
    )
}

export default YourHogArmy