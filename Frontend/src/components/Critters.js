import './Critter.css';
import React from 'react';
import CritterCard from './CritterCard';

class Critters extends React.Component {
    render() {
        return (
            <div className="critter-page">
                <div className='critter-bar'>
                    <p>Critter Bar</p>
                </div>
                <div className='critter-info'>
                    <p>Here are the critters available at [Insert Date and Time]!</p>
                </div>
                <div className='critter-grid'>
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                    {<CritterCard/>}
                </div>
            </div>
        );
    }

}

export default Critters;