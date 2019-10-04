import React from "react";
import { Hello } from "./Hello";
import ClientContainer from "./containers/clientContainer";
import AppointmentForm from "./components/appointments/appointmentForm";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ClientContainer} />
        <Route path="/appointments/new" component={AppointmentForm} />
      </Switch>
    </div>
  );
}

export default App;
