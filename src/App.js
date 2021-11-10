import React from "react";
import { useState } from "react";
// import AppForm from './components/AppForm';

function App() {
  const [values, setValues] = useState({
    distance: '',
    direction: '',
    time: '',
  });
  
  const handleDistanceInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      distance: event.target.value,
    }));
  };
  
  const handleDirectionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      direction: event.target.value,
    }));
  };
  
  const handleTimeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      time: event.target.value,
    }));
  };
  
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.direction && values.distance && values.time) {
        setValid(true);
    }
    setSubmitted(true);
    };
  return (
    <div className="App">
      <header className="App-header">
        {/* <AppForm></AppForm> */}
        <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && <div class="success-message">The information has been sent!</div>}
        <input
          id="distance"
          class="form-field"
          disabled={submitted}
          type="text"
          placeholder="Distance"
          name="distance"
          value={values.distance}
          onChange={handleDistanceInputChange} 
        />
        {submitted && !values.distance && <span id='distance-error'>Please enter a distance</span>}
        <input
          id="direction"
          class="form-field"
          type="text"
          placeholder="Direction"
          name="direction"
          value={values.direction}
          onChange={handleDirectionInputChange}
        />
        {submitted && !values.direction && <span id='last-name-error'>Please enter a last name</span>}
        <input
          id="time"
          class="form-field"
          type="text"
          placeholder="Time"
          name="time"
          value={values.time}
          onChange={handleTimeInputChange}
        />
        {submitted && !values.time && <span id='email-error'>Please enter a Time</span>}
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
      </header>
    </div>
  );
}

export default App;

