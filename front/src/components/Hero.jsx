import '../assets/css/hero.css';
import heroBg1 from '../assets/images/hero-bg1.png';
import heroBg2 from '../assets/images/hero-bg2.png';
import heroBg3 from '../assets/images/hero-bg3.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegGrinWink } from "react-icons/fa";
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <Carousel>
            <Carousel.Item>
                <section className="hero" style={{ backgroundImage: `url(${heroBg1})`, backgroundSize:'cover'}}>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-6 offset-3">
                                <div className="detail-box">
                                    <h1>QuickShop</h1>
                                    <p className='fw-bold'>
                                        Discover the latest in fashion, fresh food, and cutting-edge electronics. <br/> Shop now and enjoy exclusive deals! <FaRegGrinWink className='fs-2 '/>
                                    </p>
                                    <Link to={`/shop`}>
                                        <button className='btn btn-primary my-2 fw-bold'>
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel.Item>
            <Carousel.Item>
                <section className="hero" style={{ backgroundImage: `url(${heroBg2})` }}>
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-6 ">
                                <div className="detail-box">
                                    <h1>QuickShop</h1>
                                    <p className='fw-bold'>
                                        Fresh groceries, trendy clothes, and the latest electronics. All in one place! 
                                    </p>
                                    <Link to={`/shop`}>
                                        <button className='btn btn-primary my-2 fw-bold'>
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel.Item>
            <Carousel.Item>
                <section className="hero" style={{ backgroundImage: `url(${heroBg3})`, backgroundSize:'cover', }}> 
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-6  ">
                                <div className="detail-box">
                                    <h1>QuickShop</h1>
                                    <p className='fw-bold'>
                                        Shop the best in fashion, food, and electronics. <br/> Quality and convenience guaranteed! 
                                    </p>
                                    <Link to={`/shop`}>
                                        <button className='btn btn-primary my-2 fw-bold'>
                                            Shop Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroSection;