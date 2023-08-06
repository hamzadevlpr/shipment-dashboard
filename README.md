# Shipment Management System

![image](https://github.com/hamzadevlpr/shipment-dashboard/assets/99534215/4511daa7-3672-43a7-b60a-f8e32564372a)


The Shipment Management System is a web application that allows users to manage shipments, create new shipments, and view existing ones. It is built using React for the frontend and Node.js (with Express) for the backend. The application uses MongoDB as the database to store shipment details.

## Features

- View a list of existing shipments.
- Every 24 hours Total Shipment Count will be 0
- Create a new shipment with relevant details such as reference, location, first name, last name, etc.
- Edit and update shipment details.
- Delete shipments that are no longer needed.

## Demo

You can access the live demo of the Shipment Management System 

https://github.com/hamzadevlpr/shipment-dashboard/assets/99534215/054e4ed0-9df7-4ab4-a4b9-57d157022022

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running locally or accessible through a connection string)

### Installation

1. Clone the repository:

```
git clone https://github.com/hamzadevlpr/shipment-dashboard
cd shipment-dashboard
```

1. Install dependencies for both the frontend and backend:

```
cd frontend
npm install

cd ../backend
npm install
```


1. Configure environment variables:
Create a .env file in the backend directory and add the following:

```
MONGODB_URI=mongodb://your-mongodb-connection-string
PORT=3999
```

Replace your-mongodb-connection-string with your actual MongoDB connection string.

1. Start the development server:

```
cd frontend
npm start

cd ../backend
npm start
```

The frontend should be accessible at http://localhost:5173, and the backend will be running at http://localhost:3999.

# Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License.

