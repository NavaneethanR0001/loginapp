import React from 'react'
import { useState } from 'react';
import './Registraion.css'
import { Form, Alert } from "react-bootstrap";
import Login from './Login';


function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");
  
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    
  
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (!name || !email || !password || !phone || !profession) {
        setFlag(true);
        alert("fill all the fields")
      } else {
        setFlag(false);
        localStorage.setItem("email",email);
        localStorage.setItem("name",name);
        localStorage.setItem("professsion",profession);
        localStorage.setItem(
          "pass",
          password
        );
        console.log("Saved in Local Storage");
  
        setLogin(!login);
      }
    }
  
    function handleClick() {
      setLogin(!login);
    }
  



  return (

    <div className='body'>
 {login ? (
<div className="container">
        <div className="design">
            <div claclassNamess="pill-1 rotate-45"></div>
            <div className="pill-2 rotate-45"></div>
            <div className="pill-3 rotate-45"></div>
            <div className="pill-4 rotate-45"></div>
        </div>
        <form onSubmit={handleFormSubmit} className="login">
            <h3 className="title">User Login</h3>
            <div className="text-input">

                
              
                <label className='label'>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              
                
               
            </div>
            <div className="text-input">
                
            
                <label className='label'>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              
            </div>

            <div className="text-input">
                
            
            <label className='label'>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              
            </div>

            
            <div className="text-input">
                
            <label className='label'>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              
            </div>

            
            <div className="text-input-select">
                <label className='label'>Choose your Profession</label>
                <select
                 
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>Select</option>
                  <option>Artist</option>
                  <option>Photographer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </select>
              </div>

            <button type="submit" className="login-btn">Register</button>
         
            <div className="create">
            <p onClick={handleClick} className="ptag">
                Already registered{" "}log in?
                
              </p>
               
            </div>
          
        </form>
        </div>   ) : (
            <Login />
          )}
    
    </div>




    
  )
}

export default Registration