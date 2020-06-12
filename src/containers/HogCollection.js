import React from "react"
import HogCard from '../components/HogCard'

function HogCollection(props) {
    const displayHogCards = props.hogCollection.map(hog => {
        return <HogCard hog={hog} action={props.action} removeHog={props.removeHog} />
    })

    return (
        <div className="ui four column grid">
            <div className="row">
                {displayHogCards}
            </div>
        </div>
    )
}


export default HogCollection
