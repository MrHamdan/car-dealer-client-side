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
import image from '../../images/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg'


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

                        <Row xs={1} md={2} className="g-4 pt-2 px-2 container mx-auto">

                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://images.all-free-download.com/images/graphiclarge/travel_the_journey_of_picture_167829.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Safe & Comfortable Journey</Card.Title>
                                        <Card.Text>
                                            Have a very safe and comfortable journey with us we always provide the best experience
                                            for our customers and fullfil their desire.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://nearmetrade.com/local/public/vendor/hotel%20bareilly4.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Luxurious Hotels</Card.Title>
                                        <Card.Text>
                                            You will get luxurious hotel and special home made foods made by our
                                            special chefs and your food is going to serve to your room.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://st3.depositphotos.com/5392356/12764/i/600/depositphotos_127649128-stock-photo-group-led-by-tour-guide.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Travel Guide</Card.Title>
                                        <Card.Text>
                                            Our Travel guides familiarize people with the history, functions, and customs of a particular region or establishment.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="border-0">
                                    <img className="w-50 mx-auto rounded-3xl pt-3" src="https://www.intelastel.com/wp-content/uploads/2021/04/help-desk-scaled-652x435.jpg" alt="" />
                                    <Card.Body>
                                        <Card.Title>Our Dedicated Support</Card.Title>
                                        <Card.Text>
                                            We have a dedicated support team working on travel matters and ensures that our customers will have no issues while travelling with us.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Fade>



                </div>
            </div>
            <div>
                <h1 className="py-5 text-design">Our Happy Client Reviews</h1>
                <Reviews></Reviews>
            </div>
            <div>
                <div id="contact" className="py-5"><h1 className="text-design">Contact</h1></div>
                <h5 className="mb-5 text-black">We’d love to hear from like-minded individuals and organizations who believe in making the world of travel welcoming to people of all background and abilities.</h5>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;