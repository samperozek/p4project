
import React from "react"
import { NavLink } from "react-router-dom"


function NavigationBar() {
    return(<>
            <div className="navBar">
            <NavLink to="/landingPage">
                <h4>Home</h4>
            </NavLink>
            
            <NavLink to="/tractors">
                <h4>Registered Teams</h4>   
            </NavLink>
            
            <NavLink to="newregistration">
                <h4>New Registration</h4>
            </NavLink>

            <NavLink to="contactus">
                <h4>Contact Us</h4>
            </NavLink>
            </div>
               
    
    </>
        
    )
}

export default NavigationBar