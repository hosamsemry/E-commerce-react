import '../assets/css/hero.css';
import heroBg from '../assets/images/hero-bg.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegGrinWink } from "react-icons/fa";

function HeroSection() {
return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="detail-box">
                        <h1>
                        The Green Basket
                        </h1>
                        <p className='fw-bold '>
                            We Provide fresh Fruits And Vegetables EveryDay <br/> And Free Delivery. <FaRegGrinWink className='text-dark fs-2 '/>
                        </p>
                        <button className='btn btn-primary fw-bold ' onClick={()=>{
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            });
                        }}>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}

export default HeroSection;