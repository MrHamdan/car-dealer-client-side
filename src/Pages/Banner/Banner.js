import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'


const Banner = () => {
    return (
        <div>
            <div className="custom-bg d-flex align-items-center">
                <p className="text-style container">Lifelong Memories Just A <br />Few Seconds Away Let's Start Your Journey With Us Your Dream Will Come True<br /><Button className=" mx-auto" variant="danger">Take A Tour</Button></p>
            </div>

            <div className="carousel-design mx-auto">
                <h1 className="text-design mt-5 ">Here Are Some Stunning Images</h1>
                <h5 className="container text-gray-400 mb-4">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.</h5>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;