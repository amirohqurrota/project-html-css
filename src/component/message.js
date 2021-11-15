import React from 'react'
import {useNavigate } from 'react-router';
import './message.css'

export default function Message() {

    const name = localStorage.getItem("nameValue");
    const email = localStorage.getItem("emailValue");
    const phone = localStorage.getItem("phoneNumValue");
    const nationality = localStorage.getItem("nationalityValue");
    const message = localStorage.getItem("messageValue");

    const navigate= useNavigate();
    function backtoHome(){
        navigate('/');
    }

    return (
    <div className="container">
        <div class="col-md-12 container tabel">
            <table class="table table-borderless col-md-9">
                <tr class="mb-3">
                    <td class="label" >Full Name</td>
                    <td>:</td>
                    <td id="name">{name}</td>
                </tr>
                <tr>
                    <td class="label" >Email Adress</td>
                    <td>:</td>
                    <td id="email">{email}</td>
                </tr>
                <tr>
                    <td class="label" >Phone Number</td>
                    <td>:</td>
                    <td id="phone">{phone}</td>
                </tr>
                <tr>
                    <td class="label" >Nationality</td>
                    <td>:</td>
                    <td id="nationality">{nationality}</td>
                </tr>
                <tr id="invisible">
                    <td>&nbsp;</td>
                </tr>
                <tr id="invisible">
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" id="message"></td>
                </tr>
            </table>
        </div>
        <div class="col-md-12 d-flex justify-content-center">
            <div class="col-md-10">
                <p>{message}</p>
            </div>
        </div>
        <div class="col-md-12 mt-4">
            <div>
                <p class="fs-4 my-0">Thanks for contacting us!</p>
                <p class="fs-4">We will be in touch with you shortly.</p>
            </div>
            <form action="home.html">
                <button type="submit"  class="btn rounded-pill px-4 py-2 font-weight-normal" onClick={()=>backtoHome()} >Home</button>
            </form>
        </div>            
    </div>
    )
}
