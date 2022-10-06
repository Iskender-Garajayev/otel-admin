import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./rezervation.css";

const Rezervation = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="rezerv-container">
          <div className="form">
          <div className="rezerv-form">
              <div className="input-form">
                <input type="text" placeholder=" ID Number" pattern="[0-9]" />
              </div>
              <br />
              <div className="input-form">
                <input type="text" placeholder=" Name  " />
              </div>
              <br />
              <div className="input-form">
                <input type="text" placeholder=" Surname " />
              </div>
              <br />
              <div className="input-form">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" Phone Number"
                  pattern="[0-9]"
                />
            </div>
          </div>
          <div className="rezerv-form">
            <div className="input-form">
              <input type="text" placeholder=" Room Number" pattern="[0-9]" />
            </div>
            <br />
            <div className="input-form">
              <input type="text" placeholder=" Amount  " />
            </div>
            <br />
            <div className="input-form">
            <label for="payment-type">Type of payments</label> <br /> <br />&nbsp;&nbsp;&nbsp;
            <select className="input-form" name="payment-type" id="payment-type"><br />
              <option className="input-form" value="Cash"> Cash</option>
              <option className="input-form" value="Card">Card</option>
              <option className="input-form" value="Transaktion">Transaction</option>
            </select>
            </div>
          </div>
          </div>
          <div className="button">
            <button>Submite</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
