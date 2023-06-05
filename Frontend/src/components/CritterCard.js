import './CritterCard.css';
import React from 'react';

//const image_path = './Images/'
const image_path = './animal-crossing-collector-guide/Images/'

const CritterCard = ({ critter, critter_type, donation_array, is_south_island }) => {
    var image_folder = ''
    if (critter_type === 'bug')
        image_folder = 'Insects/'
    if (critter_type === 'fish')
        image_folder = 'Fish/'
    if (critter_type === 'sea')
        image_folder = 'SeaCreatures/'
    var imageName = image_path + image_folder + critter.Name + ".png"
    return (
        <div className='critter-card' key={critter.Name + "Card"}>
            <table className='card-table'>
                <tbody>
                    <tr><th colSpan={2}><h2>{critter.Name}</h2></th></tr>
                    <tr><td colSpan={2} className='right-pad left-pad'><h4>{critter.Description}</h4></td></tr>
                    <tr><td colSpan={2}><div className='img-div'><img className='critter-img' src={imageName} alt={critter.Name} /></div></td></tr>
                    <tr>
                        <td className='left-pad'>Time Left</td>
                        <td className='right-pad'>Comming Soon</td>
                    </tr>
                    {getMonthsRow(critter, is_south_island)}
                    <tr>
                        <td className='left-pad'>Active Times</td>
                        <td className='right-pad'>{critter.Time}</td>
                    </tr>
                    {getLocationRow(critter, critter_type)}
                    {getWeatherRow(critter, critter_type)}
                    {getSizeRow(critter, critter_type)}
                    {getSpeedRow(critter, critter_type)}
                    <tr>
                        <td className='left-pad'>Spawn Condition</td>
                        <td className='right-pad'>{critter.SpawnCondition}</td>
                    </tr>
                    <tr>
                        <td className='left-pad'>Sell Price</td>
                        <td className='right-pad'>{critter.Price}</td>
                    </tr>
                    <tr><td colSpan={2}><input id={critter.Name + 'Checkbox'} type='checkbox' onClick={() => onDonationClick(critter, donation_array)} title='Donated'></input></td></tr>
                    {setCheckBox(critter, donation_array)}
                </tbody>
            </table>
        </div>
    )
}

function setCheckBox(critter, donation_array) {
    var checkbox = document.getElementById(critter.Name + 'Checkbox')
    if (checkbox != null && donation_array.includes(critter.Name))
        checkbox.checked = true
}

function onDonationClick(critter, donation_array) {
    console.log(donation_array)
    if (!donation_array.includes(critter.Name)) {
        donation_array.push(critter.Name)
    } else {
        for (var i = 0; i < donation_array.length; i++) {
            if (donation_array[i] === critter.Name)
                return donation_array.splice(i, 1)
        }
    }
}

function getMonthsRow(critter, is_south_island) {
    if (is_south_island) {
        return (
            <tr>
                <td className='left-pad'>Active Months</td>
                <td className='right-pad'>{critter.SouthMonths}</td>
            </tr>
        )
    } else {
        return (
            <tr>
                <td className='left-pad'>Active Months</td>
                <td className='right-pad'>{critter.NorthMonths}</td>
            </tr>
        )
    }
}

function getLocationRow(critter, critter_type) {
    if (critter_type === 'sea')
        return
    return (
        <tr>
            <td className='left-pad'>Location</td>
            <td className='right-pad'>{critter.Location}</td>
        </tr>
    )
}


function getWeatherRow(critter, critter_type) {
    if (critter_type === 'sea')
        return
    return (
        <tr>
            <td className='left-pad'>Weather</td>
            <td className='right-pad'>{critter.Weather}</td>
        </tr>
    )
}


function getSizeRow(critter, critter_type) {
    if (critter_type === 'bug')
        return
    return (
        <tr>
            <td className='left-pad'>Size</td>
            <td className='right-pad'>{critter.Size}</td>
        </tr>
    )
}


function getSpeedRow(critter, critter_type) {
    if (critter_type !== 'sea')
        return
    return (
        <tr>
            <td className='left-pad'>Speed</td>
            <td className='right-pad'>{critter.Speed}</td>
        </tr>
    )
}

export default CritterCard;