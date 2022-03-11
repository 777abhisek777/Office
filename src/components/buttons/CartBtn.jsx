import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
    // We get a state of addItems
    // Write the name of the file not the function
    const state = useSelector((state)=> state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2" style={{color:"#fff",borderColor:'#202235',fontWeight:'bold',backgroundColor:'#202235'}}>
                <span className="fa fa-shopping-cart me-1" style={{color:'#fff'}}></span> Cart ({state.length})
            </NavLink>
        </>
    )
}

export default CartBtn
