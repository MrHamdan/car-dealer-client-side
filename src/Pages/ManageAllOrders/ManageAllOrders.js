import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDelete] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);



    useEffect(() => {
        fetch('https://hidden-sands-54353.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted, isUpdated])



    const handleDelete = id => {
        console.log(id, 'deleted');
        const proceed = window.confirm('Are you sure you want to cancle this user order?');
        if (proceed) {
            fetch(`https://hidden-sands-54353.herokuapp.com/deleteOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete Successful!')
                        setIsDelete(!isDeleted);
                    }
                    else {
                        setIsDelete(false);
                    }
                })
        }
    }


    const handleUpdate = id => {
        const updatedStatus = {
            status: 'approved'
        }
        axios.put(`https://hidden-sands-54353.herokuapp.com/orders/${id}`, {
            status: 'approved'
        })
            .then(res => {
                if (res.data.acknowledged) {
                    alert("Approved! Status updated")
                    setIsUpdated(true);
                }
            })
    }


    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="p-4">Manage All Bookings</h1>
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

                                    {orders.map(order => <tr key={order._id}>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.from}</td>
                                        <td>{order.to}</td>
                                        <td>{order.date}</td>
                                        <td>{order.status}</td>
                                        <td><button onClick={() => handleUpdate(order._id)} className="btn btn-success m-1"><i className="far fa-thumbs-up"></i> Update</button>
                                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger my-1"><i className="fas fa-eraser"></i> Delete</button></td>
                                    </tr>)}

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;