
import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
function SignUp() {
 
  const [inputData, setInputData] = useState('');
  const [inputData2, setInputData2] = useState('');
  const [inputData3, setInputData3] = useState('');
  const [inputData4, setInputData4] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleChange2 = (e) => {
    setInputData2(e.target.value);
  };

  const handleChange3 = (e) => {
    setInputData3(e.target.value);
  };

  const handleChange4 = (e) => {
    setInputData4(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/process-data', {
        name: inputData,
        number: inputData2,
        age: inputData3,
        gender: inputData4
      });

      setResult(response.data.result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input class = 'inputBox' type="text" value={inputData} onChange={handleChange} placeholder='Name' />
          Number:
          <input class = 'inputBox' type ="text" value={inputData2} onChange={handleChange2} placeholder='Number'/>
          Age:
          <input class = 'inputBox' type = "text" value = {inputData3} onChange={handleChange3} placeholder='Age'/>
          Gender:
          <input class = 'inputBox' type = "text" value = {inputData4} onChange={handleChange4} placeholder='Gender'/>
        </label>
        <button class = 'submit' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp