import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import userdata from "../../components/userdata/userdata";
import Table from "react-bootstrap/Table";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './gests.css'

const Gests = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="gest-containet">
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
                      <td className="td"> {userdata.room_number}</td>
                      <td className="td"> {userdata.user_id}</td>
                      <td className="td"> {userdata.name}</td>
                      <td className="td"> {userdata.surname}</td>
                      <td className="td"> {userdata.phone_number}</td>
                      <td className="td"> {userdata.price} TL</td>
                      <td className="td"> Cash </td>
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
