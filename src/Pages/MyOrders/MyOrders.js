import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    const [isDelete, setDelete] = useState(false);


    useEffect(() => {
        fetch(`https://hidden-sands-54353.herokuapp.com/myorders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));

    }, [isDelete, user.email]);


    const handleDelete = (id) => {
        const proceed = window.confirm('Cancel Your Booking ! Are you sure?');
        if (proceed) {
            fetch(`https://hidden-sands-54353.herokuapp.com/deleteOrders/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert('Your Booking Has Been Cancled')
                        setDelete(!isDelete);
                    } else {
                        setDelete(false);
                    }
                });
        }

    };


    return (
        <div>
            <div>
                <div>
                    <h1 className="p-4 text-design">My Bookings</h1>
                    {!orders && (<div className="text-center">
                        <div className="spinner-grow text-danger text-center" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <div className='table-responsive'>
                        <table className="mx-auto table table-bordered table-hover align-middle table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">From</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>

                                {orders.map(user => <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.from}</td>
                                    <td>{user.to}</td>
                                    <td>{user.date}</td>
                                    <td>{user.status}</td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-danger my-1"><i className="fas fa-ban"></i> Cancle Booking</button></td>
                                </tr>)}

                            </tbody>

                        </table>
                    </div>

                </div>
            </div>



        </div >
    );
};

export default MyOrders;