import React from "react";
import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// import FormDropdown from './components/Dropdown';
//import AppForm from './components/AppForm';

const baseURL = "127.0.0.1:8000/items"; // "https://a4vgozj136.execute-api.us-east-1.amazonaws.com/Prod/hello"


// function App() {

//   const [values, setValues] = useState({
//     distance: '',
//     direction: '',
//     time: '',
//   });

//   const [value,setValue]=useState('');
//   const handleSelect=(e)=>{
//     console.log(e);
//     setValue(e)
//   };
  

// const [distance, setDistanceValue] = useState("");
//   const handleDistanceSelect = (event) => {
//     console.log(event.target.value);
//     setDistanceValue(event.target.value);
//     console.log(distance);
//   };

//   const handleDirectionInputChange = (event) => {
//     //event.persist();
//     setValues((values) => ({
//       ...values,
//       direction: event.target.value,
//     }));
//   };
  
//   const handleTimeInputChange = (event) => {
//     //event.persist();
//     setValues((values) => ({
//       ...values,
//       time: event.target.value,
//     }));
//   };

//   const handleDistanceInputChange = (event) => {
//     //event.persist();

//     setValues((event) => ({
//       ...values,
//       distance: event.target,
//     }));
//     console.log(event.target.value);
    
//     // setValues((values) => ({
//     //   ...values,
//     //   distance: event.target.value,
//     // }));
//     // console.log(values.distance);
//   };

    
//     // setValues((values) => ({
//     //   ...values,
//     //   distance: event.target.value,
//     // }));
//     // console.log(values.distance);
//   };

//   // const handleSelect=(e)=>{
//   //   console.log(e);
//   //   setValue(e)
//   // }

//   return (
//     // add field titles & bootstrap
//     // <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
//     // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
//     <div className="App">
//       <header className="App-header">
//         {/* <p>datamessage: {data.message}</p> */}
//         {/* <AppForm></AppForm> */}
//         {/* <div class="dropdown">
//           <a class="btn btn-secondary dropdown-toggle" role="button" href="/#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//             Dropdown link
//           </a>
//           <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//             <a class="dropdown-item" href="/#">Action</a>
//             <a class="dropdown-item" href="/#">Another action</a>
//             <a class="dropdown-item" href="/#">Something else here</a>
//           </div>
//         </div> */}
      
//       <div class="form-container">

          
//       <form class="register-form" onSubmit={handleSubmit}>
      
//         <input
//           id="distance"
//           class="form-field"
//           disabled={submitted}
//           type="text"
//           placeholder="Distance"
//           name="distance"
//           value={values.distance}
//           onChange={handleDistanceInputChange} 
//         />
//         {/* {submitted && !values.distance && <span id='distance-error'>Please enter a distance</span>} */}
//         <input
//           id="direction"
//           class="form-field"
//           type="text"
//           placeholder="Direction"
//           name="direction"
//           value={values.direction}
//           onChange={handleDirectionInputChange}
//         />
//         {/* {submitted && !values.direction && <span id='last-name-error'>Please enter a direction</span>} */}
//         <input
//           id="time"
//           class="form-field"
//           type="text"
//           placeholder="Time"
//           name="time"
//           value={values.time}
//           onChange={handleTimeInputChange}
//         />
//         {/* {submitted && !values.time && <span id='email-error'>Please enter a time</span>} */}
//         <button class="form-field" type="submit" onClick={createPost}>
//           Submit
//         </button>
//       </form>
//       {valid && submitted && <div class="success-message">The information has been sent!</div>}
//     </div>
//       </header>
//     </div>
//   )

// export default App;

// import React,{useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import FormDropdown from './components/Dropdown';


function App() {

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

  function createPost() {
    axios
      .post(baseURL, {
        distance: distance,
        direction: direction,
        time: time,
      })
      .then((response) => {
        setDistance(response.data);
        setDirection(response.data);
        setTime(response.data);
        // console.log(response.data);
        // setValues(response.data);
      });
    }
  
    const [data, setData] = React.useState(false);

    React.useEffect(() => {
      fetch("/backend", {
        credentials: 'include'
      })
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

  if (!distance || !direction || !time) return null;
  return (
       <div className="App">
      <header className="App-header">
      <div class="form-container">

          
      <form class="register-form" onSubmit={handleSubmit}>
        {/* <FormDropdown></FormDropdown> */}
{/*        
        <div className="App container">
        
        <h4>data: {data}</h4>
      </div> */}
        <button class="form-field" type="submit" onClick={createPost}>
          Submit
        </button>
      </form>
      {valid && submitted && <div class="success-message">The information has been sent!</div>}
    </div>
      </header>
    </div>
  )
}

export default App;