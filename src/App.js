import React from "react";
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// import FormDropdown from './components/Dropdown';
// import {distance, direction, time} from './components/Dropdown';

// const baseURL = "127.0.0.1:8000/items"; // "https://a4vgozj136.execute-api.us-east-1.amazonaws.com/Prod/hello"

function App() {
  const [distance,setDistance]=useState('');
  const handleDistance=(event)=>{
    console.log(event);
    setDistance(event)
  }
const [direction,setDirection]=useState('');
  const handleDirection=(event)=>{
    console.log(event);
    setDirection(event)
  }
const [time,setTime]=useState('');
  const handleTime=(event)=>{
    console.log(event);
    setTime(event)
  }
  
  // const [values, setValues] = useState({
  //   distance: '',
  //   direction: '',
  //   time: '',
  // });
  // const handleValues=(event)=>{
  //   console.log(event);
  //   setValues(event);
  // }

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(direction && distance && time) {
        setValid(true);
    }
    setSubmitted(true);
    };
  const [data, setData] = React.useState(false);

  function createPost() {
    axios
      .post("http://172.25.137.205:8000/items", {
        distance: distance, 
        direction: direction,
        time: time
      })
      .then(response =>
        //console.log(response.data);
        console.log(response)
        // setDistance(response.data);
        // setDirection(response.data);
        // setTime(response.data);
      );
    }
  
  React.useEffect(() => {
    // console.log(data.message);
    fetch("/backend", {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  // if (!distance && !direction && !time) return null;
  return (
       <div className="App">
      <header className="App-header">
      <div class="form-container">

          
      <form class="register-form" onSubmit={handleSubmit}>
      <div className="App container">
        <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Distance"
                  className="d-inline mx-2"
                  onSelect={handleDistance}>
                  <Dropdown.Item eventKey="A">Short Distance</Dropdown.Item>
                  <Dropdown.Item eventKey="B">Medium Distance</Dropdown.Item>
                  <Dropdown.Item eventKey="C">Long Distance</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Direction"
                  className="d-inline mx-2"
                  onSelect={handleDirection}
                  >
                  <Dropdown.Item eventKey="A">Left</Dropdown.Item>
                  <Dropdown.Item eventKey="B">Forward</Dropdown.Item>
                  <Dropdown.Item eventKey="C">Right</Dropdown.Item>
              </DropdownButton>
              <DropdownButton
                  id="dropdown-button-dark-example2"
                  variant="secondary"
                  menuVariant="dark"
                  title="Time"
                  className="d-inline mx-2"
                  onSelect={handleTime}
                  >
                  <Dropdown.Item eventKey="A">10 Min.</Dropdown.Item>
                  <Dropdown.Item eventKey="B">20 Min.</Dropdown.Item>
                  <Dropdown.Item eventKey="C">30 Min.</Dropdown.Item>
                  {/* href="#/action-1" href="#/action-2" href="#/action-3" */}
              </DropdownButton>
              
              <h4>Distance: {distance}</h4>
              <h4>Direction: {direction}</h4>
              <h4>Time: {time} minutes</h4>
      </div>
        <div className="App container">
        
        {/* <h4>data: {data}</h4> */}
      </div>
        <button class="form-field" type="submit" onClick={createPost}>
          Submit
        </button>
        
      </form>
      {/* {<div class="success-message">The information has been sent!</div>} */}
      {/* valid && submitted &&  */}
    </div>
      </header>
    </div>
  )
}

export default App;