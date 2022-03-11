import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';


const Header = () => {  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#fff"}} >
                <div className="container-fluid py-2" style={{backgroundColor:"#fff"}}>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"#ff8fab"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <center><ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{fontWeight:"bold",color:'#000'}}>
                                <NavLink className="nav-link" aria-current="page" to="/" style={{color:'#000',fontSize:'15px'}}>Home</NavLink>
                            </li>
                           
                            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:"#000", backgroundColor:"#fff",borderColor:"#fff",fontWeight:'bold',fontSize:'15px'}}>
    Shop By State
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/products" style={{fontSize:"11px"}}>Andhra Pradesh</Dropdown.Item>
    <Dropdown.Item href="/products1" style={{fontSize:"11px"}}>Arunachal Pradesh</Dropdown.Item>
    <Dropdown.Item href="/products3" style={{fontSize:"11px"}}>Assam</Dropdown.Item>
    <Dropdown.Item href="/products4" style={{fontSize:"11px"}}>Bihar</Dropdown.Item>
    <Dropdown.Item href="/products5" style={{fontSize:"11px"}}>Chhattisgarh</Dropdown.Item>
    <Dropdown.Item href="#/action-6" style={{fontSize:"11px"}}>Goa</Dropdown.Item>
    <Dropdown.Item href="#/action-7" style={{fontSize:"11px"}}>Gujarat</Dropdown.Item>
    <Dropdown.Item href="#/action-8" style={{fontSize:"11px"}}>Haryana</Dropdown.Item>
    <Dropdown.Item href="#/action-9" style={{fontSize:"11px"}}>Himachal Pradesh</Dropdown.Item>
    <Dropdown.Item href="#/action-10" style={{fontSize:"11px"}}>Jharkhand</Dropdown.Item>
    <Dropdown.Item href="#/action-11" style={{fontSize:"11px"}}>Karnataka</Dropdown.Item>
    <Dropdown.Item href="#/action-12" style={{fontSize:"11px"}}>Kerala</Dropdown.Item>
    <Dropdown.Item href="#/action-13" style={{fontSize:"11px"}}>Madhya Pradesh</Dropdown.Item>
    <Dropdown.Item href="#/action-14" style={{fontSize:"11px"}}>Maharashtra</Dropdown.Item>
    <Dropdown.Item href="#/action-15" style={{fontSize:"11px"}}>Manipur</Dropdown.Item>
    <Dropdown.Item href="#/action-16" style={{fontSize:"11px"}}>Meghalaya</Dropdown.Item>
    <Dropdown.Item href="#/action-17" style={{fontSize:"11px"}}>Mizoram</Dropdown.Item>
    <Dropdown.Item href="#/action-18" style={{fontSize:"11px"}}>Nagaland</Dropdown.Item>
    <Dropdown.Item href="/products2" style={{fontSize:"11px"}}>Odisha</Dropdown.Item>
    <Dropdown.Item href="#/action-20" style={{fontSize:"11px"}}>Punjab</Dropdown.Item>
    <Dropdown.Item href="#/action-21" style={{fontSize:"11px"}}>Rajasthan</Dropdown.Item>
    <Dropdown.Item href="#/action-22" style={{fontSize:"11px"}}>Sikkim</Dropdown.Item>
    <Dropdown.Item href="#/action-23" style={{fontSize:"11px"}}>Tamil Nadu</Dropdown.Item>
    <Dropdown.Item href="#/action-24" style={{fontSize:"11px"}}>Telangana</Dropdown.Item>
    <Dropdown.Item href="#/action-25" style={{fontSize:"11px"}}>Tripura</Dropdown.Item>
    <Dropdown.Item href="#/action-26" style={{fontSize:"11px"}}>Uttar Pradesh</Dropdown.Item>
    <Dropdown.Item href="#/action-27" style={{fontSize:"11px"}}>Uttarakhand</Dropdown.Item>
    <Dropdown.Item href="#/action-28" style={{fontSize:"11px"}}>Gairsain</Dropdown.Item>
    <Dropdown.Item href="#/action-29" style={{fontSize:"11px"}}>West Bengal</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:"#000", backgroundColor:"#fff",borderColor:"#fff",fontWeight:'bold',fontSize:'15px'}}>
    Shop By Country
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/products" style={{fontSize:"11px"}}>Australia</Dropdown.Item><hr/>
    <Dropdown.Item href="/products1" style={{fontSize:"11px"}}>Japan</Dropdown.Item><hr/>
    <Dropdown.Item href="/products3" style={{fontSize:"11px"}}>Thailand</Dropdown.Item><hr/>
    <Dropdown.Item href="/products4" style={{fontSize:"11px"}}>Malaysia</Dropdown.Item><hr/>
    <Dropdown.Item href="/products5" style={{fontSize:"11px"}}>Singapore</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{color:'#000',fontWeight:'bold',fontSize:'15px'}}>Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" style={{color:'#000',fontWeight:'bold',fontSize:'15px'}}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" style={{color:'#000',fontWeight:'bold',fontSize:'15px'}}>Contact</NavLink>
                            </li>
                            
                            
                        </ul></center> 
                    {/* <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE</NavLink> */}
                    <Login/>
                    <Signup/>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
