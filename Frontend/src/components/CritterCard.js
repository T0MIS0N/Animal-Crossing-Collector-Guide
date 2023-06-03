import './CritterCard.css';
import React from 'react';

//const image_path = './Images/Insects/'
const image_path = './animal-crossing-collector-guide/Images/Insects/'

//class CritterCard extends React.Component {
const CritterCard = ({critter}) =>{
    //console.log(critter)
    var imageName = image_path + critter.Name + ".png"
    /*if (this.filter.critterType === 'bugs')
        imageName = "./Images/Insects/" + critter.Name + ".png"
    if (this.filter.critterType === 'fish')
        imageName = "./Images/Fish/" + critter.Name + ".png"
    if (this.filter.critterType === 'sea-creatures')
        imageName = "./Images/SeaCreatures/" + critter.Name + ".png"*/
    return (
        <div className='critter-card' key={critter.Name+"Card"}>
            <table className='card-table'>
                <tbody>
                <tr><th colSpan={2}><h2>{critter.Name}</h2></th></tr>
                <tr><td colSpan={2} className='right-pad left-pad'><h4>{critter.Description}</h4></td></tr>
                <tr><td colSpan={2}><div className='img-div'><img src={imageName} alt={critter.Name}/></div></td></tr>
                <tr>
                    <td className='left-pad'>Date</td>
                    <td className='right-pad'>{new Date().toUTCString()}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Active Months</td>
                    <td className='right-pad'>{critter.NorthMonths}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Active Times</td>
                    <td className='right-pad'>{critter.Time}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Location</td>
                    <td className='right-pad'>{critter.Location}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Weather</td>
                    <td className='right-pad'>{critter.Weather}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Spawn Condition</td>
                    <td className='right-pad'>{critter.SpawnCondition}</td>
                </tr>
                <tr>
                    <td className='left-pad'>Sell Price</td>
                    <td className='right-pad'>{critter.Price}</td>
                </tr>
                <tr><td colSpan={2}><input type='checkbox' title='Donated'></input></td></tr>
                </tbody>
            </table>
        </div>
    )

    /*render() {
        return (
            <div className="critter-card">
                <p>Critter Card!</p>
            </div>
        );
    }*/

    /*constructor(filter) {
        super()
        this.filter = filter
    }

    CritterCard(critter) {
        var imageName = ""
        if (this.filter.critterType === 'bugs')
            imageName = "./Images/Insects/" + critter.Name + ".png"
        if (this.filter.critterType === 'fish')
            imageName = "./Images/Fish/" + critter.Name + ".png"
        if (this.filter.critterType === 'sea-creatures')
            imageName = "./Images/SeaCreatures/" + critter.Name + ".png"
        return (
            <div className='critter-card' key={critter.Name + "Card"}>
                <table className='card-table'>
                    <tr><th>{critter.Name}</th></tr>
                    <tr><td>{critter.Description}</td></tr>
                    <tr><td><img src={imageName} alt={critter.Name}/></td></tr>
                </table>
            </div>
        )*/
        /*return (
            //This key attribute on the grid items is ESSENTIAL to let the app know which component is which to allow it to
            //Understand what to rerender and when.
            <div className="critter-card" key={critter.Name + "Item"}>
                <table className="grid-table">
                    <tbody>
                        <tr><th colSpan={3} className="critter-name"><h2>{critter.Name}</h2></th></tr>
                        <tr><td colSpan={3} className="critter-desc"><h4>{critter.Description}</h4></td></tr>
                        <tr>
                            <td rowSpan={this.getImageRowSpan()} className="critter-image"><img src={imageName} alt={critter.Name}></img></td>
                            <td className="table-label"><h4>Months Active</h4></td>
                            <td className="table-content"><h4>{critter.NorthMonths}</h4></td>
                        </tr>
                        <tr>
                            <td className="table-label"><h4>Hours Active</h4></td>
                            <td className="table-content"><h4>{critter.Time}</h4></td>
                        </tr>
                        {this.getLocationRow(critter)}
                        {this.getWeatherRow(critter)}
                        {this.getSpeedRow(critter)}
                        {this.getSizeRow(critter)}
                        <tr>
                            <td className="table-label"><h4>Spawn Condition</h4></td>
                            <td className="table-content"><h4>{critter.SpawnCondition}</h4></td>
                        </tr>
                        <tr>
                            <td className="table-label"><h4>Sell Price</h4></td>
                            <td className="table-content"><h4>{critter.Price}<img src="/Images/UI/BellsIcon.png" alt="bells" className="bell-img"></img></h4></td>
                        </tr>
                        <tr><td colSpan={3} className="critter-donate">{this.setDonatedCheckHTML(critter.Name)}</td></tr>
                    </tbody>
                </table>
            </div>
        )
    }*/
}

    /*getImageRowSpan() {
        if (this.filter.critterType === "fish")
            return 7
        return 6
    }

    getLocationRow(critter) {
        if (this.filter.critterType === "sea-creatures") {
            return
        }
        return (
            <tr>
                <td className="table-label"><h4>Location</h4></td>
                <td className="table-content"><h4>{critter.Location}</h4></td>
            </tr>
        )
    }

    getWeatherRow(critter) {
        if (this.filter.critterType === "sea-creatures")
            return
        return (
            <tr>
                <td className="table-label"><h4>Weather</h4></td>
                <td className="table-content"><h4>{critter.Weather}</h4></td>
            </tr>
        )
    }

    getSizeRow(critter) {
        if (this.filter.critterType === "bugs")
            return
        return (
            <tr>
                <td className="table-label"><h4>Size</h4></td>
                <td className="table-content"><h4>{critter.Size}</h4></td>
            </tr>
        )
    }

    getSpeedRow(critter) {
        if (this.filter.critterType === "sea-creatures")
            return (
                <tr>
                    <td className="table-label"><h4>Speed</h4></td>
                    <td className="table-content"><h4>{critter.Speed}</h4></td>
                </tr>
            )
    }*/

export default CritterCard;