import React,{useEffect,useState} from 'react';
import '../css/Home.css';
import logo1 from '../assets/co1.jpg';
import logo2 from '../assets/co2.jpg';
import logo3 from '../assets/co3.jpg';
const Home=props=>{
    const [logos,LOGOS]=useState([logo1,logo2,logo3]);
    const [logo,LOGO]=useState(logo1);
    const [i,I]=useState(0);
    useEffect(() => {
        const lapse=setInterval(()=>{
            switch(i%3)
            {
                case 0:LOGO(logo2);break;
                case 1:LOGO(logo2);break;
                case 2:LOGO(logo3);break;
                default:break;
            }
            console.log(i+':'+logo);
        },1000);
    })
    return (
        <div className='Home'>
            <div className='slides'>
                <img src={logo} alt='' className='slide slide1'/>
            </div>
            <div className='slide-text'>
                <h1>Track Covid Status</h1>
                <h2>Around the World</h2>
            </div>
        </div>
    )
}
export default Home;