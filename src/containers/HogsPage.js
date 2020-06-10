import React, { Component } from "react"
import HogCollection from './HogCollection'
import HogArmy from './YourHogArmy'
import Hogs from '../porkers_data'

class HogsPage extends Component {
    state = {
        hogCollection: [],
        filteredCollection: [],
        hogArmy: [],
        collectionVisible: true,
        hogSpecs: {},
    }

    componentDidMount() {
        this.setState({ hogCollection: Hogs, filteredCollection: Hogs })
        console.log("Hogs Fetched!")
    }

    // addToArmy = (hog) => {
    //     const newCollection = this.state.filteredCollection.filter(card => card.highest_medal_acheived !== bot.highest_medal_acheived)
    //     this.setState({
    //         filteredCollection: newCollection,
    //         hogArmy: [...this.state.botArmy, hog],
    //         collectionVisible: true,
    //     })
    // }



    render() {
        const { filteredCollection, botArmy, botSpecs, collectionVisible } = this.state

        return (
            <div>
                {/* <HogArmy hogs={hogArmy} /> */}
                <HogCollection hogCollection={filteredCollection} />
            </div>
        )
    }
}

export default HogsPage
