import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'
import ReactStars from "react-rating-stars-component";

// import breakPoints from '../smallslide/index';
const firstExample = {
    size: 30,
    value: 2.5,
    edit: false
  };
const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "14rem",backgroundColor:'#f9dee5'}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">₹{item.price}</p>
                        <div style={{fontFamily:'sans-serif',textAlign:'center'}}>
     
     
      <ReactStars {...firstExample} />
   
    </div>
                        {/* <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink><br/><br/> */}
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-secondary" style={{color:'#fff',borderColor:'#202235',backgroundColor:'#202235'}}>Buy Now</NavLink>
                    </div>
                   
                    <div class="card-body text-center">
               
                    
                        {/* <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink><br/><br/> */}
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-warning"  style={{borderColor:'#202235',color:'#202235'}}>View More</NavLink>
                    </div>
                    

</div>


                   
                );
    }



  

                return (
                <div><br/>
                    <div className="container py-5" style={{backgroundColor:"#dfffe0",boxShadow:'5px 7px 5px #535353'}}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{color:'#000'}}>Andhra Pradesh</h1>
                                
                               <hr/>
                             
                            </div>
                        </div>
                        
                    </div>
                    
                        
                
                    <div className="container" style={{backgroundColor:"#fff",boxShadow:'5px 7px 5px #535353'}}>
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                        
                    </div><br/>
                    
                    <div className="container">
                       
                    </div>
                    
                    
                    
                    {/* <div className="container" style={{backgroundColor:"#bffcc6"}}>
                        <div className="row justify-content-around">
                            {DATA7.map(cardItemb)}
                        </div>
                    </div> */}
                    < breakPoints/>
                </div>
               
                )
}

                export default Product
