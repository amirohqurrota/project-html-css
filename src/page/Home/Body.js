import React, { useState } from 'react'
import './body.css'
import Nav from '../../component/nav'
import { useNavigate } from 'react-router';

export default function Body() {
    const currentTime=new Date();
    const [time, setTime] = useState(`${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`)
    setInterval(() => {
        const newDate = new Date()
        const formattedTime = `${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`
        setTime(formattedTime)
    }, 1000)
    // function clock(){
    //     return `<h2>${new Date().toLocaleTimeString()}</h2>`
    // }
    // setInterval(clock, 1000);

    const navigate=useNavigate()
    function toForm(){
        navigate('/contact-us')
    }
    return (
        <div container-body>
            <Nav/>
            <div className="row ms-5 justify-content-evenly align-items-center py-5">
                <div className="clock-ticking">
                    <h5>{time}</h5>
                </div>
                <div className="col-sm-4 bg-black rounded-circle photo-content"> </div>
                    <div className="col-sm-8 bg-red my-0 justify-content-center">
                        <h4>Hi, my name is</h4>
                        <p className="display-2 fw-bold">Anne Sullivan</p>
                        <h3>I Build Thing for The Web</h3>
                        <div >
                            <button type="button" className="btn btn-dark rounded-pill px-4" style={{"background-color": "#F47522"}} onClick={toForm}>Get In Touch</button>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
