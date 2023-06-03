import '../App.css';
import React from 'react';
import './Home.css';
import '../'

const images_folder = './Images/UI/'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className='description'>
                    <h1>Animal Crossing Collector's Guide</h1>
                    <p>Animal Crossing Collector's Guide is an unofficial webapp which aims to make collecting various
                        items in animal crossing easier. For now, the app only has information on critters, but in the
                        future it will include paintings and flowers.</p>
                </div>
                <div className='card-row'>
                    <a href='#/critters' className='card card-left'>
                        <h2>Critters</h2>
                        <img alt='Bug Icon' src={images_folder+'BugIcon.png'}></img>
                        <p>View critters that are currently available to capture as well as when other critters will return. Track your progress to collecting all the critters </p>
                    </a>
                    <a target='blank' href='https://github.com/T0MIS0N/animal-crossing-collector-guide' 
                    className='card card-right'>
                        <h2>Github</h2>
                        <img alt='Github Icon' src={images_folder+'github-dark.svg'}></img>
                        <p>View the project's source code and documentation on Github</p>
                    </a>
                </div>
            </div>

        );
    }

}

export default Home;