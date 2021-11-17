import React from "react";
import { useState } from "react";
import axios from "axios";
// import AppForm from './components/AppForm';

const baseURL = "https://a4vgozj136.execute-api.us-east-1.amazonaws.com/Prod/hello";


function App() {

  // distance

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

  function createPost() {
    axios
      .post(baseURL, {
        distance: '1',
        direction: '2', // change back to direction
        time: '3',
      })
      .then((response) => {
        setValues(response.data);
      });
    }
  
  if (!values) return null;
  
  return (
    // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <div className="App">
      <header className="App-header">
        {/* <AppForm></AppForm> */}
        <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {valid && submitted && <div class="success-message">The information has been sent!</div>}
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
        {/* {submitted && !values.distance && <span id='distance-error'>Please enter a distance</span>} */}
        <input
          id="direction"
          class="form-field"
          type="text"
          placeholder="Direction"
          name="direction"
          value={values.direction}
          onChange={handleDirectionInputChange}
        />
        {/* {submitted && !values.direction && <span id='last-name-error'>Please enter a direction</span>} */}
        <input
          id="time"
          class="form-field"
          type="text"
          placeholder="Time"
          name="time"
          value={values.time}
          onChange={handleTimeInputChange}
        />
        {/* {submitted && !values.time && <span id='email-error'>Please enter a time</span>} */}
        <button class="form-field" type="submit" onClick={createPost}>
          Submit
        </button>
      </form>
    </div>
      </header>
    </div>
    // {/* </link> */}
  );
}

export default App;

