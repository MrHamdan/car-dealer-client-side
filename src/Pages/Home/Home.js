import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Spinner, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import './Home.css'
import Contact from '../Contact/Contact';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { HashLink } from 'react-router-hash-link';
import image from '../../images/david-leveque-esvWH-owWug-unsplash.jpg'


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("https://hidden-sands-54353.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="home">
            <div>
                <Header></Header>
                <Banner></Banner>
            </div>
            <div className="container mt-5">
                <div className="text-center">
                    <h1 id="cars" className="text-design3">Our Cars Collections And Special Deals </h1>
                    <h5 className="text-black">We have so many different cars collections in our showroom that you are most welcome to come and visit us and watch our cars collections.We also have regular cars which is very reasonable in price that you can purchase.We provide best prices available for our customers because your happiness is our happiness.</h5>
                </div>
                {services.length === 0 ?
                    <Spinner animation="border" variant="danger" />
                    :
                    <div className="row row-cols-1 row-cols-md-3 pb-5">
                        {/* Show services */}
                        {
                            services.slice(0, 6).map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                }
                <Nav.Link as={HashLink} to="/moreServices"><Button variant="danger" className="rounded-pill">Explore More Cars <i className="fas fa-car"></i> </Button></Nav.Link>
                <div>
                    <div>
                        <h1 className="py-5 text-design">Our Happy Client Reviews</h1>
                        <Reviews></Reviews>
                    </div>
                </div>
            </div>
            <h1 id="about" className="py-5 text-design">About Us</h1>
            <h5 className="container mb-5 text-black ">Cardealer.com is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, Cardealer.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2018, Cardealer.com acquired Dealer Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier car buying process, and connected digital experiences that sell and service more.</h5>
            <div className="about-us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">

                <Fade left>

                    <div>
                        <img className=" rounded" src={image} alt="" />
                    </div>

                </Fade>

                <div>

                    <Fade right>

                        <Row xs={1} md={2} className="g-4 pt-4 px-2 container mx-auto">

                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.motoringresearch.com/wp-content/uploads/2019/06/More-people-visting-car-dealers.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Big Discount On Cars</Card.Title>
                                        <Card.Text>
                                            We have big discount on cars. We always have best cars in our showroom. So you can buy best cars in our showroom. We always make sure that our clients are satisfied with our cars.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://i.pinimg.com/originals/c6/db/67/c6db67fa28a7d7395493f44bf578ee4d.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Car Inssurance</Card.Title>
                                        <Card.Text>
                                            If you own a car, you need auto insurance. A car insurance policy helps provide financial protection for you, and possibly others if you're involved in an accident. we are here to help you with your car insurance.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://burtstruckrepair.com/files/2019/05/truckrepair.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Car Services</Card.Title>
                                        <Card.Text>
                                            We have our own car services showroom where we have good car mechanics and they are well trained we will provide one of the best services to our clients.We provide one year free service to our client who buy their first car from us.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://cdn.motor1.com/images/mgl/X4PXv/s1/cheap-car-shipping.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Fastest Delivery</Card.Title>
                                        <Card.Text>
                                            We always try to deliver our clients dream car as fast as possible we dont want to waste time. Once a client order is placed we go throw with the paper work as fast as we can then we have our own cargo trucks and plane which we use to deliver the car to the client.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Fade>



                </div>
            </div>
            <div>
                <div id="contact" className="py-5"><h1 className="text-design">Contact</h1></div>
                <h5 className="mb-5 text-black">We are always here to help you feel free to contact with us and stay connected with us we always listen to our client feedback and everyday we are trying to improve our company deals and policy</h5>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;