import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATAA from '../Dataa'
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../redux/actions/index'
import {Button} from 'react-bootstrap';
import Checkout from './Checkout';
import { NavLink } from 'react-router-dom';

const ProductDetail1 = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    {/* Now we need a product id which is pass from the product page. */}
    const proid = useParams();
    const proDetail = DATAA.filter(x=>x.id == proid.id)
    const product1 = proDetail[0];
    console.log(product1);

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product1) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product1))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product1))
            setCartBtn("Add to Cart")
        }
    }

    return (
        <>
        <div className="container my-5 py-3">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center mx-auto product">
                    <img src={product1.img} alt={product1.title}height="400px" />
                </div>
               
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="display-5 fw-bold">{product1.title}</h1>
                    <hr />
                    <h2 className="my-4">₹{product1.price}</h2>
                    <p className="lead">{product1.desc}</p>
                    <button onClick={()=>handleCart(product1)} className="btn btn-outline-primary my-5">{cartBtn}</button>
                    <NavLink to={`/Checkout/`} class="btn btn-outline-primary">Buy Now</NavLink>
                </div>
            </div>
          
        </div>
        </>
    )
}

export default ProductDetail1
