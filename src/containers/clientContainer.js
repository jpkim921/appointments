import React from "react";
import { connect } from "react-redux";
import Client from "../components/client/client";

class ClientContainer extends React.Component {
  renderClients = () => {
    return this.props.clients.map((client, index) => (
      <Client client={client} key={index} />
    ));
  };
  render() {
    console.log(this.props.clients);
    return (
      <div>
        <h3>Client Container</h3>
        {this.renderClients()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients.clients
  };
};

export default connect(
  mapStateToProps,
  null
)(ClientContainer);
