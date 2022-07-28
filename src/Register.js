import { useState } from 'react';
import './Register.css';
export default function Form() {
const [name, setName] = useState('');
const [userID, setUserID] = useState('');
const [dob, setDOB] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');

const handleName = (e) => {
	setName(e.target.value);
};

const handleuserID = (e) => {
	setUserID(e.target.value);
};

const handleEmail = (e) => {
	setEmail(e.target.value);
};

const handleDOB = (e) => {
	setDOB(e.target.value);
};

const handlePassword = (e) => {
	setPassword(e.target.value);
};

const handleConfirmPassword = (e) => {
	setConfirmPassword(e.target.value);
};

function submit(event){
    if(password != confirmpassword){
        alert('Both passwords are not matching')
    }
    else{
    let data = `Your Submitted data:
    userID: ${userID}, 
    Name: ${name}, 
    Date of Birth: ${dob}, 
    Email: ${email},
    Password ${password}`;
    document.getElementById('form').style.display = 'None';
    document.querySelector('h1').style.display = 'None';
    var element = document.createElement("div");
    element.setAttribute('id', 'info')
    element.appendChild(document.createTextNode(data));
    document.getElementById('con').appendChild(element);
    event.preventDefault();
    }
    
}

return (
    <div className="container1" id='con'>
    <h1>Registration</h1>
	<form onSubmit={submit} id='form'>
        <div>
            <label>Name</label>
            <input onChange={handleName} className="input"
            value={name} type="text" required />
        </div>
        <div>
            <label>User ID</label>
            <input onChange={handleuserID} className="input"
            value={userID} type="text" required />
        </div>
        <div>
            <label>Email</label>
            <input onChange={handleEmail} className="input"
            value={email} type="email" required />
        </div>
        <div>
            <label>Date of Birth</label>
            <input onChange={handleDOB} className="input"
            value={dob} type="date" />
        </div>
        <div>
            <label>Password</label>
            <input onChange={handlePassword} className="input"
            value={password} type="password" required />
        </div>
        <div>
            <label>Confirm Password</label>
            <input onChange={handleConfirmPassword} className="input"
            value={confirmpassword} type="password" required />
        </div>
		<button type="submit" id="register">Register</button>
	</form>
    </div>
);
}
