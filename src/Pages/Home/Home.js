import React, { useEffect, useState } from 'react';
import { Card, Col, Nav, Row, Spinner } from 'react-bootstrap';
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
                    <h1 id="cars" className="text-design3">Most Visited & Popular Travel Locations</h1>
                    <h5 className="text-black">There are so many amazing places around the globe to see, we couldn't possibly include them all in just one list. But, these breathtaking destinations are definitely worth bumping to the top of your travel bucket list–whether you're looking to relax on a beach, get off the grid or explore a city.</h5>
                </div>
                {services.length === 0 ?
                    <Spinner animation="border" variant="info" />
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
                <Nav.Link as={HashLink} to="/moreServices"><button className="text-white fw-bold  book-btn-color p-2 rounded">Explore More Cars</button></Nav.Link>
                <div>

                </div>
            </div>
            <h1 id="about" className="py-5 text-design">About Us</h1>
            <h5 className="container mb-5 text-black ">Our Definition of Travel World

                When people leave their usual environment, they come into contact with new people, new sights, new experiences, and new ideas.

                That exposure allows individuals to learn more about themselves and the world around them, creating greater internal and societal awareness.

                For Travel Unity, travel experiences go beyond those involved airplane travel.

                For us, travel includes:

                local experiences, like going to a restaurant in a different neighborhood, visiting a cultural institution to see the exhibits or for an event, or joining a local tour
                regional experiences, like day trips or camping
                short and long-term relocation for school or work</h5>
            <div className="about-us mt-2 grid md:grid-cols-2 sm:grid-cols-1 mb-5">

                <Fade left>

                    <div>
                        <img className=" rounded" src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
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
                <h1 className="py-5 text-design">Travellers Reviews</h1>
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