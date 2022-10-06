import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import userdata from "../../components/userdata/userdata";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';

const Gests = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="gest-containet">
{/* <<<<<<< HEAD
          <div>
            {userdata.map(userdata=>(
              <div>
              <span> {userdata.room_number}</span>
              <span> {userdata.user_id}</span>
              <span> {userdata.name}</span>
              <span> {userdata.surname}</span>
              <span> {userdata.phone_number}</span>
              <span> {userdata.price}TL </span>
              </div>
======= */}
          <Table className="paleBlueRows" >
          <thead>
                    <tr>
                      <th>Room No</th>
                      <th>ID Number</th>
                      <th>First Name</th>
                      <th>Username</th>
                      <th>Phone Number</th>
                      <th>Price</th>
                      <th>Payement Method</th>
                      <th>Entering Date</th>
                      <th>Expired Date</th>
                    </tr>
                  </thead>
            {userdata.map((userdata) => (
              <>
                  <tbody>
                    <tr>
                      <td> {userdata.room_number}</td>
                      <td> {userdata.user_id}</td>
                      <td> {userdata.name}</td>
                      <td> {userdata.surname}</td>
                      <td> {userdata.phone_number}</td>
                      <td> {userdata.price} TL</td>
                      <td> Cash </td>
                    </tr>
                  </tbody>
              </>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Gests;
