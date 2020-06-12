import React, { Component } from "react"
import hogs from "../porkers_data"
import HogCollection from './HogCollection'
import YourHogArmy from './YourHogArmy'

class HogsPage extends Component {
    state = {
        hogCollection: [],
        hogArmy: []
    }

    componentDidMount() {
        // fetch('URL')
        // .then(response => response.json())
        // .then(data => this.setState({ hogCollection: data}))
        // .then(console.log("Hogs Fetched!"))
        this.setState({ hogCollection: hogs })
        console.log("Hogs fetched!", this.state.hogCollection)
    }

    addHogToArmy = (hog) => {
        if (!this.state.hogArmy.find(currentArmyHog => currentArmyHog.id === hog.id)) {
            this.setState({ hogArmy: [...this.state.hogArmy, hog] }) //Adds a hog to hogArmy
        }
    }

    removeHogFromArmy = (hog) => {
        let newArmy = this.state.hogArmy.filter(card => card.id !== hog.id)
        this.setState({ hogArmy: newArmy })
    }

    removeHogPermanently = (hog) => {
        let newCollection = this.state.hogCollection.filter(card => card.id !== hog.id)
        this.removeHogFromArmy(hog)
        this.setState({ hogCollection: newCollection })

        //     fetch(`http://localhost:6001/hogs/${hog.id}`, {
        //   method: 'DELETE'
        // }).then(response => response.json())
        //   .then(result => console.log(result))

    }

    render() {
        return (
            <div>
                < YourHogArmy hogArmy={this.state.hogArmy} removeHogFromArmy={this.removeHogFromArmy} removeHogPermanently={this.removeHogPermanently} />
                < HogCollection hogCollection={this.state.hogCollection} action={this.addHogToArmy} removeHog={this.removeHogPermanently} />
            </div>
        )
    }
}

export default HogsPage
