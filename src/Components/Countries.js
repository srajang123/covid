import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../css/Countries.css';

const Countries=props=>{
    const [list,List]=useState('');
    useEffect(()=>{
        axios.get('')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
    })
    return(
        <div className='countries'></div>
    );
}
export default Countries;