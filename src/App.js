import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';
import Result from './components/Result';
import { Form } from 'react-bootstrap'


function App() {
  const [formData, setFormData] = useState({ email: "", password: "", confirmPass: "", name: "", age: "", dob: "", gender: "", phoneNumb: "", essay: "" })
  // const [name, setName] = useState("")
  // const [phoneNumb, setPhoneNumb] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [confirmedPassword, setConfirmedPassword] = useState("")
  const [count, setCount] = useState(0)

  const handleAdd = (value) => {
    setCount(count + value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ formData })
    const { password, confirmPass } = formData
    if (password !== confirmPass) {
      alert("Wrong Password")
    }
  }

  // const handleName = (e) => {
  //   setName(e.target.value)
  // }

  // const handlePhoneNumb = (e) => {
  //   setPhoneNumb(e.target.value)
  // }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value)
  // }

  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }

  // const handleConfirmedPassword = (e) => {
  //   setConfirmedPassword(e.target.value)
  // }

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="App">
      <h2>Demo useState</h2>
      <Button handleAdd={handleAdd} value={-1} />
      <Button handleAdd={handleAdd} value={-10} />
      <Result count={count} />
      <Button handleAdd={handleAdd} value={1} />
      <Button handleAdd={handleAdd} value={10} />

      <h2>Demo form</h2>

      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" onChange={handleOnChange} />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" onChange={handleOnChange} />
        <br />
        <label htmlFor="dob">Date of birth:</label>
        <br />
        <input type="date" id="dob" name="dob" onChange={handleOnChange} />
        <br />
        <label htmlFor="gender">Gender:</label>
        <br />
        <select id="gender" name="gender" onChange={handleOnChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>

        </select>
        <br />
        <label htmlFor="phoneNumb">Phone Number:</label>
        <br />
        <input type="number" id="phoneNumb" name="phoneNumb" onChange={handleOnChange} />
        <br />
        <label htmlFor="essay">Essay:</label>
        <br />
        <textarea id="essay" name="essay" rows="10" cols="30" onChange={handleOnChange}>Input here.</textarea>
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" onChange={handleOnChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" onChange={handleOnChange} />
        <br />
        <label htmlFor="confirmPass">Confirm Password:</label>
        <br />
        <input type="password" id="confirmPass" name="confirmPass" onChange={handleOnChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>




    </div>
  );
}

export default App;
