import React,{useEffect,useState} from 'react';
import {Chart} from 'react-charts';
import axios from 'axios';
import '../css/Country.css';

const Country=props=>{
    const [active,Active]=useState('');
    const [confirmed,Confirmed]=useState('');
    const [recovered,Recovered]=useState('');
    const [deaths,Deaths]=useState('');
    const [name,Name]=useState('');
    useEffect(()=>{
        axios.get('https://api.covid19api.com/total'+window.location.pathname)
        .then(res=>{
            const temp=res.data[res.data.length-1];
            console.log(temp);  
            Active(temp.Active);
            Confirmed(temp.Confirmed);
            Recovered(temp.Recovered);
            Deaths(temp.Deaths);
            Name(temp.Country);
        })
        .catch(err=>console.log(err));
    });
    return(
        <div className='country'>
            <div className='head'>
                <h2>{name}</h2>
            </div>
            <div className='body'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md covid-col'>
                            <h3>Total Cases</h3>
                            <div class='value total'>
                                {confirmed}
                            </div>
                        </div>
                        <div className='col-md covid-col'>
                            <h3>Active Cases</h3>
                            <div class='value active'>
                                {active}
                            </div>
                        </div>
                        <div className='col-md covid-col'>
                            <h3>Recovered Cases</h3>
                            <div class='value recover'>
                                {recovered}
                            </div>
                        </div>
                        <div className='col-md covid-col'>
                            <h3>Deaths</h3>
                            <div class='value death'>
                                {deaths}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Country;