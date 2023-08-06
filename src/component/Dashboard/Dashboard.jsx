import { TbTruckDelivery } from 'react-icons/tb';
import { MdBoy } from 'react-icons/md';
import { BsFillBoxSeamFill, BsCardHeading } from 'react-icons/bs';
import React, { useState, useEffect } from 'react'
import { BoxIcon, Wallet } from 'lucide-react';
import axios from 'axios';

function Dashboard() {
  const [shipment, setShipment] = useState([]);
  const resetInterval = 86400;
  useEffect(() => {
    const url = 'http://localhost:3999/';
    axios.get(url)
      .then((res) => {
        setShipment(res.data);
      }).catch((err) => {
        console.error('Error fetching user data:', err);
      })
    const interval = setInterval(() => {
      setShipment([]);
    }, resetInterval);

    return () => {
      clearInterval(interval);
    };
  }, [])

  const items = [
    {
      title: "Total Shipment",
      Number: shipment.length,
      icon: <TbTruckDelivery size={70} />
    },
    {
      title: "Delivery",
      Number: '0',
      icon: <MdBoy size={70} />
    }, {
      title: "Returns",
      Number: '0',
      icon: <BoxIcon size={60} />
    }, {
      title: "Total Shipment",
      Number: '0',
      icon: <BsCardHeading size={70} />
    }, {
      title: "Total COD",
      Number: '0',
      icon: <Wallet size={70} />
    }
  ]
  return (
    <>
      <hr className='ring-0 w-full  ring-black my-10' />
      <div className="flex max-w-6xl m-auto flex-wrap justify-center gap-5">
        {
          items.map((element, index) => {
            return (
              <div key={index}>
                <div className="ring-1 ring-[#15803D] w-80 h-40 px-10 flex justify-between items-center shadow-md rounded-md">
                  <div>
                    {element.icon}
                  </div>
                  <div className='flex flex-col items-end text-gray-600 font-medium text-xxl'>
                    <h1>{element.title}</h1>
                    <p>{element.Number}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <hr className='ring-0 w-full  ring-black my-10' />

    </>
  )
}

export default Dashboard