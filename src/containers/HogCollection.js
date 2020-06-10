import React, { Component } from "react"
import HogCard from "../components/HogCard"

export default function HogCollection({ hogCollection }) {

    const displayHogCards = hogCollection.map(hog => {
        return <HogCard hog={hog} />
    })

    return (
        <div className="ui four column grid">
            <div className="row">
                {displayHogCards}
            </div>
        </div>
    )
}
