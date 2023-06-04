import './Critter.css';
import React, { useState, useEffect } from "react";
import CritterCard from './CritterCard';
//import BugsJSON from './Json/Bugs.json';

const homepage = './animal-crossing-collector-guide'
var critter_type = 'bug'

const Critters = props => {
    const [critters, setCritters] = useState([]);

    //TODO: Research useEffect hooks to learn the ins and outs
    useEffect(() => {
        if(critter_type === 'bug')
            retrieveBugs();
        if(critter_type === 'fish')
            retrieveFish();
        if(critter_type === 'sea')
            retrieveSea();
    });

    //TODO: Understand what this does
    const retrieveBugs = () => {
        const bugsData = fetch(homepage+'/Json/Bugs.json').then(response => {
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
        const fishData = fetch(homepage+'/Json/Fish.json').then(response => {
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
        const seaData = fetch(homepage+'/Json/Sea_Creatures.json').then(response => {
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
                <a href="./" onClick={()=>critter_type = 'bug'}><img className='critter-type' src={homepage + '/Images/UI/BugIcon.png'} alt='bug-icon'></img></a>
                <a href="./" onClick={()=>critter_type = 'fish'}><img className='critter-type' src={homepage + '/Images/UI/FishIcon.png'} alt='fish-icon'></img></a>
                <a href="./" onClick={()=>critter_type = 'sea'}><img className='critter-type' src={homepage + '/Images/UI/DiveIcon.png'} alt='sea-creature-icon'></img></a>
            </div>
            <div className='critter-info'>
                <p>Here are the critters available at {getFormattedDate()}!</p>
            </div>
            <div className='critter-grid'>
                {critters.map((critter_item) => {
                    return <CritterCard critter = {critter_item} critter_type={critter_type}/>
                })}
            </div>
        </div>
    );
}

function getFormattedDate(){
    const d = new Date()
    var seconds = ""
    if(d.getSeconds() < 10){
        seconds = '0'+d.getSeconds()
    }else{
        seconds = d.getSeconds()
    }
    var date_string = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + " " 
    + d.getHours() + ":" + d.getMinutes() + ":" + seconds
    return date_string
}

export default Critters;