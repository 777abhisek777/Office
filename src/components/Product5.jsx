import React from 'react'
import { NavLink } from 'react-router-dom';

import DATA5 from '../Data5';



import ReactStars from "react-rating-stars-component";

// import breakPoints from '../smallslide/index';
const firstExample = {
    size: 30,
    value: 2.5,
    edit: false,
    
  };
const Product5= () => {

    const cardItemr = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "60rem",height:"38rem",left:'0%',backgroundColor:'#dfffe0'}}>
                <center><img src={item.img} class="card-img-top" alt={item.title} style={{width:"15rem",height:"20rem",top:-20,left:'-20%'}}/></center>
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{left:'-10%'}}>{item.title}</h5>
                        <p className="lead" style={{left:'-20%'}}>₹{item.price}</p>
                     <div style={{fontFamily:'sans-serif'}}>
     
     
                     <center> <ReactStars {...firstExample} />  </center>
   
    </div>
                        {/* <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink><br/><br/> */}
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-secondary"style={{color:'#fff',borderColor:'#202235',backgroundColor:'#202235'}}>Buy Now</NavLink>
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
                    <div className="container py-5" style={{backgroundColor:"#f9dee5",boxShadow:'5px 7px 5px #535353',width:'140rem'}}>
                        <div className="row" >
                            <div className="col-12 text-center">
                                <h1 style={{color:'#000'}}>Chattisgarh</h1>
                                <hr style={{color:'#000'}}/> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="container" style={{backgroundColor:"#fff",boxShadow:'5px 7px 5px #535353',width:'120rem'}}>
                        <div className="row justify-content-around">
                            {DATA5.map(cardItemr)}
                           
                        </div>
                       
                    </div>

                  
                  </div>
                  
                )
}


                export default Product5
