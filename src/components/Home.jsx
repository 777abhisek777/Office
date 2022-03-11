import React from 'react'
import Product from './Product'
import Product1 from './Product1'
import Footer from './Footer'
import Product5 from './Product5'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'

// import Product6 from './Product6'

// import Slider from '../Slider/Slider/Slider'
// import  breakPoints from '../smallslide/index'

const Home = () => {
    return (
        <div style={{backgroundColor:'#f1efef'}}>
            
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                {/* Add */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/img7.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/home/img6.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img7.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/home/img6.jpg" class="d-block w-100" alt="IPhone" height="500px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            
                        </div>
                        {/* <Product6/> */}
                        
                        <Product5/>
                        <Product4/>
                        <Product3/>
                        <Product2/>
                        <Product1/>
                        <Product/>
                    
                        
                       
                        <Footer/>
                        {/* <Slider/> */}  
                        {/* < breakPoints/> */}
                        
                    </div>
                    )
}

                    export default Home
