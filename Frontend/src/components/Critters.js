import './Critter.css';
import React, { useState, useEffect } from "react";
import CritterCard from './CritterCard';
import Filter from './CritterFilter'

const homepage = './animal-crossing-collector-guide/'
//const homepage = './'
var critter_type = 'bug'
var filter = new Filter()

const Critters = props => {
    const [critters, setCritters] = useState([]);

    useEffect(() => {
        if (critter_type === 'bug')
            retrieveBugs();
        if (critter_type === 'fish')
            retrieveFish();
        if (critter_type === 'sea')
            retrieveSea();
    });

    const retrieveBugs = () => {
        const bugsData = fetch(homepage + 'Json/Bugs.json').then(response => {
            return response.json()
        })
            .catch(e => {
                console.log(e);
            })

        bugsData.then(res => {
            setCritters(res)
        })
    };

    const retrieveFish = () => {
        const fishData = fetch(homepage + 'Json/Fish.json').then(response => {
            return response.json()
        })
            .catch(e => {
                console.log(e);
            })

        fishData.then(res => {
            setCritters(res)
        })
    };

    const retrieveSea = () => {
        const seaData = fetch(homepage + 'Json/Sea_Creatures.json').then(response => {
            return response.json()
        })
            .catch(e => {
                console.log(e);
            })

        seaData.then(res => {
            setCritters(res)
        })
    };


    return (
        <div className="critter-page">
            <div className='critter-bar'>
                <a onClick={() => critter_type = 'bug'}><img className='critter-type' src={homepage + 'Images/UI/BugIcon.png'} alt='bug-icon'></img></a>
                <a onClick={() => critter_type = 'fish'}><img className='critter-type' src={homepage + 'Images/UI/FishIcon.png'} alt='fish-icon'></img></a>
                <a onClick={() => critter_type = 'sea'}><img className='critter-type' src={homepage + 'Images/UI/DiveIcon.png'} alt='sea-creature-icon'></img></a>
                <h4 className='toggle'>South Island <input type='checkbox' onClick={() => filter.south_island = !filter.south_island} /></h4>
                <h4 className='toggle'>Show Donated <input type='checkbox' onClick={() => filter.show_donated = !filter.show_donated} /></h4>
            </div>
            <div className='critter-info'>
                {getCritterInfo()}
            </div>
            <div className='critter-grid'>
                {filter.available_critters(critters).map((critter_item) => {
                    return <CritterCard critter={critter_item} critter_type={critter_type} donation_array={filter.donated_critters} is_south_island={filter.south_island} />
                })}
            </div>
        </div>
    );
}

function getFormattedDate() {
    const d = new Date()
    var month
    switch(d.getMonth()){
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
        case 2:
            month = 'Mar'
            break;
        case 3:
            month = 'Apr'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'Jun'
            break;
        case 6:
            month = 'Jul'
            break;
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sep'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        case 11:
            month = 'Dec'
            break; 
    }

    var date_string = month + " " + d.getDate() + " " + d.getFullYear()
    return date_string
}

function getFormattedTime(){
    const d = new Date()
    var seconds = ""
    var minutes = ""
    var hours = ""
    var time_suffix = "AM"

    if (d.getSeconds() < 10) {
        seconds = '0' + d.getSeconds()
    } else {
        seconds = d.getSeconds()
    }

    if (d.getMinutes() < 10) {
        minutes = '0' + d.getMinutes()
    } else {
        minutes = d.getMinutes()
    }

    if (d.getHours() === 0){
        hours = '12'
    }
    else if(d.getHours() === 12){
        hours = '12'
        time_suffix = "PM"
    }
    else if(d.getHours < 12){
        hours = d.getHours()
    }
    else{
        hours = d.getHours() - 12
        time_suffix = "PM"
    }

    var time_string = hours+":"+minutes+":"+seconds+" "+time_suffix
    return time_string
}

function getCritterInfo() {
    var info_donation
    var info_date = getFormattedDate()
    var info_time = getFormattedTime()
    var info_island_type
    if(filter.show_donated)
        info_donation = "all the"
    else
        info_donation = "the undonated"
    
    if(filter.south_island)
        info_island_type = "Southern Islands"
    else
        info_island_type = "Northern Islands"

    return (
        <p>Here are {info_donation} critters available on {info_date} at {info_time} for {info_island_type}</p>
    )
}

export default Critters;