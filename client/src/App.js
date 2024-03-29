import './App.css';
import {useState} from "react";
import Axios from 'axios';

function App() {
  const[name, setName] = useState('');
  const[age, setAge] = useState('0');
  const[position , setPosition] = useState('');
  const[country , setCountry] =useState('');
  const[wage , setWage] =useState('0');
  
  const addEmployee = () =>{
    Axios.post("http://localhost:3001/create", {name: name, age: age, position: position, country: country, wage: wage}).then(() =>{
      console.log("sucesso");
    })
  }
  return (

    <div className="App">
      <div className = "info">
        <label>Name:</label>
        <input type = "text"
          onChange={(event) => {
              setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input type = "number"
          onChange={(event) =>{
            setAge(event.target.value);
          }}
        />
        <label>Position:</label>
        <input type = "text"
          onChange={(event) =>{
            setPosition(event.target.value);
          }}
        />
        <label>Country:</label>
        <input type = "text"
          onChange={(event)=>{
            setCountry(event.target.value);
          }}
        />
        <label>Wage(year):</label>
        <input type = "number"
          onChange={(event) =>{
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
