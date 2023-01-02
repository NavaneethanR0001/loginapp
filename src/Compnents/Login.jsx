import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";
import './Login.css';

function Login() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
  
    const [flag, setFlag] = useState(false);
  
    const [home, setHome] = useState(true);
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("pass")
  
    function handleLogin(e) {
      e.preventDefault();
    
      
  
      if (!emaillog || !passwordlog) {
        setFlag(true);
        console.log("EMPTY");
      } else if (passwordlog !== localPassword || emaillog !== localEmail) {
        setFlag(true);
        alert("Wrong credentials")
      } else {
        setHome(!home);
        setFlag(false);
      }
    }
  
    return (
      <div className="bodyy">
        {home ? (
            <div className="containerr">
          <form onSubmit={handleLogin}>
            <h3 className="titlee">LogIn</h3>
            <div className="text-inputt">
              <label  className='label'>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>
  
            <div className="text-inputt">
              <label  className='label'>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>
  
            <button type="submit" className="login-btnn">
              Login
            </button>
            
        
            {flag && (
              <Alert color="primary" variant="warning">
                Fill correct Info else keep trying.
              </Alert>
            )}
          </form>
          </div>
        ) : (
          <Home />
        )}
  
  
        
      </div>
    );
  }

export default Login