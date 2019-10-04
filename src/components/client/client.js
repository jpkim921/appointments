import React from "react";
import { Route, Link } from "react-router-dom";
import AppointmentForm from "../appointments/appointmentForm";

class Client extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <div className="clientCard">
          <h4>
            {this.props.client.firstName} {this.props.client.lastName}
          </h4>
          <p>{this.props.client.phone}</p>
          <Link to="/appointments/new">Create New Appointment</Link>
        </div>
      </div>
    );
  }
}

export default Client;
