import React from "react";

class AppointmentForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h3>Appointment Form</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <input
              onChange={this.handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={this.handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={this.handleChange}
              name="phone"
              type="text"
              placeholder="Phone"
            />
          </fieldset>
          <fieldset>
            <input
              onChange={this.handleChange}
              id="appt-date"
              type="date"
              name="appt-date"
              required
            />
            <input
              onChange={this.handleChange}
              type="time"
              id="appt-time"
              name="appt-time"
              name="time"
              min="09:00"
              max="18:00"
              step="900"
              required
            />
          </fieldset>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AppointmentForm;
