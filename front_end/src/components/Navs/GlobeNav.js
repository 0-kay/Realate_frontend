
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import design from './MainNav.module.css'

const GlobeNav = () =>{

const [token, setToken] = useState({});
useEffect(() => {
    setInterval(() => {
        const tokens =Cookies.get('access_token');
        console.log("getting tokens");
        setToken(tokens);
        }, [token])
},[token]);


const logout = () => {
    return Cookies.remove("access_token");
}

if (!token) {
    return (
        
        <header className={design.header}>
                
        <nav>
            <span>
        <Link to='/' className={design.mdir}>Realate</Link> 
        </span>
            <ul>
                
                <li >
                    <Link to='/Log-in' className={design.dir}> Login</Link>
                </li>
                <li> 
                    <Link to='/Sign-up' className={design.dir}> Sign-up</Link>
                </li>

            </ul>
        </nav>
    </header>
    )
}
if (token) {
   return (
    <header className={design.header}>
                
    <nav>
        <span>
    <Link to='/' className={design.mdir}> Trans_Air</Link> 
    </span>
        <ul>
            
            <li >
                <Link to='/Messages' className={design.dir}> Messages</Link>
            </li>
            <li> 
                <Link to='/Settings' className={design.dir}>Settings</Link>
            </li>
            <li> 
                <Link to='/Profile' className={design.dir}>Profile</Link>
            </li>
            <li>
            <Link to="/" className={design.dir} onClick={logout}>Logout</Link>
            </li>
        </ul>
    </nav>
</header>
    )
}

}
export default GlobeNav;