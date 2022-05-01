import {useState } from 'react';
//imported here
import {useNavigate}  from 'react-router-dom';
import axios from 'axios';
import React from "react";
import Cookies from 'js-cookie';
const Login = props => {

      //created an instance here 
      let navigate = useNavigate()
      const [username, setUsername]=useState('');
      const [password, setPassword]=useState('');
      

        function onSubmit(e){
        e.preventDefault();
      

        
        const RealateUser = new URLSearchParams (); //declare the input here (it kinda changes the var type)

        RealateUser.append('username', username);//pointing the username input to the var
        RealateUser.append('password', password);//pointing the password input to the var

        let config= { headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
        axios.post('http://localhost:8080/api/login',RealateUser,config)
        .then((res) => {
            console.log(res.data.access_token);
            console.log(JSON.stringify(res.data.access_token));
          Cookies.set('access_token',JSON.stringify(res.data.access_token));

          console.log('login successful');
          navigate("/startchat", { replace: true });
          return res.data;
                    
        }).catch(error=>{
          console.log('login unsuccessful');
          var errResp = error.response;
          console.log(errResp)
         });
         }

        
      
      
        return (
    
    <div >Login to your account!
          <form onSubmit={onSubmit}>

              <div className="form-group">
                  <label>Username</label>
                  <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)}  />
              </div>
             
              <div className="form-group">
                  <label>Password</label>
                  <input type="text"  value={password} onChange={(e) => setPassword(e.target.value)}  />
              </div>
              <div className="form-group">
                  <input type="submit" value="Login" className="btn btn-success btn-block" />
              </div>
          </form>       

    </div>
   
        )
        
}

export default Login;



