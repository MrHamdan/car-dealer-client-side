import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../images/mercedes_PNG80135.png'
import bg from '../../images/2562631.jpg'
import { Typography } from '@mui/material';

const carBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}



const Banner = () => {
    return (
        <div>
            <div className="custom-bg d-flex align-items-center">
                <p className="text-style container">The Wind Is Not Even Close To Us We Have One Of The Best Car Deals For You And Your Family!<br /><Button className=" mx-auto" variant="danger">Take A Tour</Button></p>
            </div>

            <div className="carousel-design mx-auto">
                <h1 className="text-design mt-5 ">Your Dream Is Knocking At Your Door</h1>
                <h5 className="container mb-4">Here are some picture taken by our driving experts those images have been taken white those cars are getting tasted by professional drivers. Get yourself your dream car and have fun with your life enjoy every moment of your life.Those cars images was amazing while we are capturing these moments. Now you can take a look at the photos !!!</h5>
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
            <div>
                <div className="container mt-5">
                    <h1 className="text-design mt-5">Exclusive Deals</h1>
                    <h5>We have some exclusive deals available. Becoming a member can get you an exclusive deal which is pretty amazing. 30% discount on your first purchase and we have more amazing gifts for you </h5>
                </div>
                <Box style={carBanner} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img
                                style={{ width: "100%" }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}>
                            <Box>
                                <Typography variant="h3" sx={{ mb: 5 }} style={{ color: '#FF4A52' }}>
                                    Best Car Deals
                                </Typography>
                                <Typography variant="h4" style={{ color: 'white' }}>
                                    Save up to 30% on your next car purchase with our exclusive car deals and offers. Get your car today!
                                </Typography>
                                <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                                    Many car deals and offers are exclusive to our members. Sign up today to get your exclusive car deals and offers. Get in touch with us!
                                </Typography>
                                <Button variant="danger">Learn More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Banner;