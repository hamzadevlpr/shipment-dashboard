import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import location from './Country'
import { status } from './Country'

export default function Create() {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    // form handling
    const [formData, setFormData] = useState({
        reference: "",
        loca: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        amount: "",
        financial: "",
        remark: ""

    })
    // Form HandleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            formData.reference === "" ||
            formData.loca === "" ||
            formData.firstName === "" ||
            formData.lastName === "" ||
            formData.phone === "" ||
            formData.address === "" ||
            formData.city === "" ||
            formData.amount === ""
        ) {
            toast.error(`Fields cannot be empty`, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            const url = 'http://localhost:3999/create';
            const response = await axios.post(url, formData);
            if (response.status === 201) {
                toast.success('Shipment Created', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                });
            }
        }



        // navigate('/dashboard')
    }
    return (
        <>
            <div className="flex justify-center m-5">
                <div className="bg-white shadow-lg rounded-lg w-[50rem] ring-1 ring-gray-300">
                    <div className="md:flex">
                        <form className="p-5 w-full" onSubmit={handleSubmit}>
                            <div className="py-5 ">
                                <span className="text-2xl uppercase font-bold">Shipment Information</span>
                            </div>
                            <div className="flex gap-3 sm:flex-nowrap flex-wrap flex-col">
                                <div className="flex justify-center gap-5 sm:flex-nowrap flex-wrap">

                                    <TextField
                                        name="reference"
                                        onChange={handleChange}
                                        size="small"
                                        label="Reference No. *"
                                        className="w-full"
                                        color="success"
                                    />
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        name="loca"
                                        label="Location *"
                                        className="w-full"
                                        size="small"
                                        color="success"
                                        onChange={handleChange}
                                        defaultValue="Karachi"
                                    >
                                        {location.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        name="firstName"
                                        onChange={handleChange}
                                        size="small"
                                        label="First Name *"
                                        className="w-full"
                                        color="success"
                                    />


                                </div>
                                <div className="flex justify-center gap-5 sm:flex-nowrap flex-wrap">

                                    <TextField
                                        name="lastName"
                                        onChange={handleChange}
                                        size="small"
                                        label="Last Name *"
                                        className="w-full"
                                        color="success"
                                    />
                                    <TextField
                                        type="number"
                                        max={11}
                                        name="phone"
                                        onChange={handleChange}
                                        size="small"
                                        label="Consignee Phone *"
                                        className="w-full"
                                        color="success"
                                    />

                                    <TextField
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        size="small"
                                        label="Consignee Email"
                                        className="w-full"
                                        color="success"
                                    />


                                </div>
                                <div className="flex justify-center gap-5 sm:flex-nowrap flex-wrap">

                                    <TextField
                                        name="address"
                                        onChange={handleChange}
                                        size="small"
                                        label="Address *"
                                        className="w-full"
                                        color="success"
                                    />
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        name="city"
                                        label="Consignee City "
                                        className="w-full"
                                        size="small"
                                        color="success"
                                        onChange={handleChange}
                                        defaultValue="Karachi"
                                    >
                                        {location.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        type="number"
                                        name="amount"
                                        onChange={handleChange}
                                        size="small"
                                        label="Amount *"
                                        className="w-full"
                                        color="success"
                                    />


                                </div>
                                <div className="flex justify-center gap-5 sm:flex-nowrap flex-wrap">

                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        name="financial"
                                        label="Financial Status *"
                                        className="w-full"
                                        size="small"
                                        color="success"
                                        onChange={handleChange}
                                        defaultValue="None"
                                    >
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        max={11}
                                        name="remark"
                                        onChange={handleChange}
                                        size="small"
                                        label="Remark"
                                        className="w-full"
                                        color="success"
                                    />



                                </div>


                                <label className="flex items-center mt-3">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-gray-600"
                                    />
                                    <span className="ml-2 text-gray-700">Open Parcel Feature</span>
                                </label>



                            </div>

                            <div className="flex justify-start items-center py-5">
                                <button
                                    type="submit"
                                    className="button"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>

    );
}