import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import moment from 'moment/moment';

function Shipment() {
    const [loading, setLoading] = useState(false);
    const [shipment, setShipment] = useState([]);

    useEffect(() => {
        setLoading(true);
        const url = 'http://localhost:3999/';
        axios.get(url)
            .then((res) => {
                setShipment(res.data);
            }).catch((err) => {
                console.error('Error fetching user data:', err);
            }).finally(() => {
                setLoading(false);
            })

    }, [])
    return (
        <>
            <div className="flex justify-center gap-5 sm:m-5 m-5 md:justify-end">
                <NavLink to={'/create'} className="button">
                    Export CVS
                </NavLink>
                <NavLink to={'/create'} className="button">
                    Import
                </NavLink>
                <NavLink to={'/create'} className="button">
                    New Shipment
                </NavLink>
            </div>

            <section className="antialiased  text-gray-600  px-4">
                <div className="flex flex-col justify-center h-full">
                    {/* Table */}
                    <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        {loading ?
                            <div className="flex justify-center p-32">
                                <ClipLoader className="text-gray-600" size={55} />
                            </div> :
                            <div className="p-3">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full">
                                        <thead className="text-xs font-bold text-md uppercase text-gray-700 bg-gray-50">
                                            <tr>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-bold text-md text-left">S. No.</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Client Order No.</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Booking Date</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Amount</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Brand</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Location</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Tracking Number</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Consignee Name</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Consignee Phone</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div>Consignee City</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        {
                                            shipment.map((element, index) => {
                                                return (
                                                    <>
                                                        <tbody className="text-sm divide-y divide-gray-100">

                                                            <tr >
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div className="font-bold">{index + 2000}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.orderNumber}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{moment(element.createdDate).format('DD/MM/YYYY')}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>Rs. {element.amount}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.financial}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.city}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.trackingNumber}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.city}</div>
                                                                </td>
                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.firstName} {element.lastName}</div>
                                                                </td>

                                                                <td className="p-2 whitespace-nowrap">
                                                                    <div>{element.phone}</div>
                                                                </td>

                                                            </tr>

                                                        </tbody>
                                                    </>
                                                )
                                            })
                                        }
                                    </table>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </section >
        </>
    )
}

export default Shipment