import React from 'react';
import icon from '../../../images/logo.png'
import './Footer.css'
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedin,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const pinteresIcon = <FontAwesomeIcon icon={faPinterest} />;
    return (
        <footer className="w-100 flex-shrink-0 border-t-2 bg-color">
            <div className="container py-4">
                <div className="row gy-4 gx-5 d-flex align-items-center mx-5">
                    <div className="col-lg-4 col-md-6">
                        <img className="d-flex mx-auto mb-3" src={icon} alt="" />
                        <p className=" text-muted">Travel World</p>
                        <p className="small text-muted mb-0">Copyright &copy; 2021 All Rights Reserved. <a className="text-primary text-danger" href="#">Hamdan</a></p>
                    </div>
                    <div className="col-lg-4 col-md-6 ms-auto">
                        <h5 className="text-black mb-3">Travel World</h5>
                        <p className="small text-muted">World Best Travel Website Around The World</p>
                        <div
                            className=" col-lg-6 d-flex justify-content-evenly
                mx-auto p-2"
                        >
                            <span>
                                <h1 className="youtube-color mx-3">{youtubeIcon}</h1>
                            </span>
                            <span>
                                <h1 className="facebook-color mx-3">{facebookIcon}</h1>
                            </span>
                            <span>
                                <h1 className="twitter-color mx-3">{twitterIcon}</h1>
                            </span>
                            <span>
                                <h1 className="linkedin-color mx-3">{linkedinIcon}</h1>
                            </span>
                            <span>
                                <h1 className="pinteres-color mx-3 ">{pinteresIcon}</h1>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;