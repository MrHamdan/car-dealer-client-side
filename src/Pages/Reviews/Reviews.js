import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();


    useEffect(() => {
        fetch("https://hidden-sands-54353.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            {reviews.length === 0 ?
                <Spinner animation="border" variant="info" />

                :
                <div className="container mb-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            reviews.map(review => <div
                                key={review._id}
                            >
                                <div className="col pt-5">
                                    <div className="card card-design h-100 rounded-3xl shadow-2xl">
                                        <div className="card-body text-white-300 fw-bolder">
                                            <h3 className="card-title">{review.name}</h3>
                                            <h5>{review.description}</h5>
                                            <Rating
                                                initialRating={review.rating}
                                                emptySymbol="far fa-star fa-2x"
                                                fullSymbol="fas fa-star fa-2x"
                                                readonly></Rating>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            }
        </div>
    );
};

export default Reviews;