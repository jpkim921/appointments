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
        <h3>Create a new appointment.</h3>
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AppointmentForm;
