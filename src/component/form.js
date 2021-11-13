import React from 'react'
import { useState, useRef } from 'react';
import validator from 'validator';

export default function Form() {


    const storeData={
        fullName:"",
        email: "",
        phone: "",
        nationality: "",
        message:"",
    }
    const [data, setData] = useState(storeData);
    const regexName = /^[A-Za-z]*$/;
    const regexPhone = /^[0-9\b]+$/;
    let [errName, setErrName] = useState("");
    let [errEmail, setErrEmail] = useState("");
    let [errPhone, setErrPhone] = useState("");
    //const listError = [errName, errEmail, errPhone]

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
    })()
      

    function localData(){
        localStorage.setItem("nameValue", storeData.fullName);
        localStorage.setItem("emailValue", storeData.email);
        localStorage.setItem("phoneNumValue", storeData.phone);
        localStorage.setItem("nationalityValue", storeData.nationality);
        localStorage.setItem("messageValue", storeData.message);
        //console.log(document.getElementById("fullname").value);
    }

    const handleInput=e=>{
        const name= e.target.name;
        const value=e.target.value;
        
        if (name==="fullname"){
            if(regexName.test(value)){
                setErrName("")
            }else{
                setErrName("Nama lengkap harus berupa huruf")
            }
        }
        if(name==="email"){
            if(validator.isEmail(value)){
                setErrEmail("")
            }else{
                setErrEmail("Alamat Email Tidak Valid")
            }
        }
        if(name==="phone"){
            if(regexPhone.test(value) && value.length >= 9 && value.length <= 14){
                setErrPhone("")
            }else{
                setErrPhone("No Handphone Hanya Terdiri dari 9-14 Angka")
            }
        }
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (event)=>{
        if(errName !== "" && errPhone !== "" && errEmail !== ""){
            alert("terdapat data yang tidak sesuai")
            event.preventDefault()
        }else{
            localData()
        }
        
    }

    // function resetData(){
    // setData(emptyData)
    // }

    return (
        <div class="col-sm-6 py-3 row justify-content-center align-content-center">
            <div class="col-10">
                <p class="display-6 mb-2">Contact us</p>
                <form class="row g-3 needs-validation" novalidate action="review_message.html">
                    <div class="col-md-12">
                    <label for="fullname" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullname"  placeholder="Your Full Name Here..." onChange={handleInput} value={storeData.fullName} required />
                    <div class="invalid-feedback">
                        Full name cannot be empty
                    </div>
                    </div>
                    <div class="col-md-12">
                    <label for="emailAddress" class="form-label">Email Address</label>
                    <input type="text" class="form-control" id="emailAddress"  placeholder="Example@domain.com" onChange={handleInput} value={storeData.email} required/>
                    <div class="invalid-feedback">
                        Email address cannot be empty
                    </div>
                    </div>
                    <div class="col-md-12">
                    <label for="phoneNumber" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="phoneNumber" placeholder="08573890xxxx" onChange={handleInput} value={storeData.email} required />
                    <div class="invalid-feedback">
                        Phone number cannot be empty
                    </div>
                    </div>
                    <div class="col-md-12">
                    <label for="nationality" class="form-label">Nationality</label>
                    <select class="form-select" id="nationality" onChange={handleInput} value={storeData.nationality} required >
                        <option selected value="">Choose...</option>
                        <option value="1">Indonesia</option>
                        <option value="2">Brazilian</option>
                        <option value="3">British</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select your nationality.
                    </div>
                    </div>
                    <div class="col-md-12">
                        <label for="message" class="form-label">Message</label>
                        <textarea id="message" class="form-control form-control-sm " rows="5" placeholder="Your Message Here..." required ></textarea><br/>
                    </div>
                    <button type="submit" class="btn btn-dark rounded-pill col-md-3" onclick={handleSubmit()}>Submit</button>
                </form>

            </div>
        
        </div>
    )
}
