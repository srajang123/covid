import React from 'react';
import '../css/About.css';

const About=props=>{
    return(
        <div className='about'>
            <div className='head'>
                <h2>Covid-19 Tracker</h2>
            </div>
            <div className='body'>
                <p>Covid-19 Cases are increasing at a very high rate around the globe. Almost all the countries are effected by this global pandemic. There is a need that the whole world comes together and fight this pandemic. There is a large number of new cases reported daiy. And as the time passes without a cure for this,the cases will continue to rise.
                    <br/>
                    I have created this Covid-19 Tracker. Using this, you can track the number of cases around the globe.
                </p>
            </div>
        </div>
    );
}
export default About;