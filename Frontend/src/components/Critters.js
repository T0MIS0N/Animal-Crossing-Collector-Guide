import './Critter.css';
import React, { useState, useEffect } from "react";
import CritterCard from './CritterCard';
//import BugsJSON from './Json/Bugs.json';

const homepage = './animal-crossing-collector-guide'

const Critters = props => {
    const [critters, setCritters] = useState([]);

    //TODO: Research useEffect hooks to learn the ins and outs
    useEffect(() => {
        retrieveBugs();
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


    return (
        <div className="critter-page">
            <div className='critter-bar'>
                <p>Critter Bar</p>
            </div>
            <div className='critter-info'>
                <p>Here are the critters available at {getFormattedDate()}!</p>
            </div>
            <div className='critter-grid'>
                {critters.map((critter_item) => {
                    //{console.log(critter)}
                    return <CritterCard critter = {critter_item}/>
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