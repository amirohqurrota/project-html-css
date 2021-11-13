import React from 'react'
import Form from '../../component/form'
import "./contactUs.css"



export default function FormPage() {
    return (
        <div className="row main">
            <div class="col-sm-5 col p-0 picture-contact d-flex justify-content-center align-content-center">
                <div class="row container-dark-blue d-flex justify-content-center align-content-center"> 
                <div class="col"></div>
                <img src="../src/image/logo-ALTA-v2.png" alt="" class="img-fluid col"/>
                <div class="col"></div>
                </div>
            </div>
            <Form/>
        </div>
    )
}
