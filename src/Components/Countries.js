import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../css/Countries.css';

const Countries=props=>{
    const [list,List]=useState([]);
    const dataSort=(a,b)=>{
        const p=a.Country.toLowerCase();
        const q=b.Country.toLowerCase();
        if(p>q)
            return 1;
        else if(p<q)
            return -1;
        else 
            return 0;
    }
    useEffect(()=>{
        axios.get('https://api.covid19api.com/countries')
        .then(res=>{
            res.data.sort(dataSort);
            List(res.data);
        })
        .catch(err=>console.log(err));
    })
    return(
        <div className='countries'>
            <table className="countries-list">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((el,idx)=>(
                        <tr>
                            <td>{idx+1}</td>
                            <td><a href={'/country/'+el.Slug} className='country-link'>{el.Country}</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Countries;