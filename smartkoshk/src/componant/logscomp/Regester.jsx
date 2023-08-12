
import React, { useState } from 'react';
import Login from './Login'
import "./login.css"
function Regester() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [CreateMessage, setCreateMessage] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  
  const handleCreateCancel = () => {
    setShowRegisterForm(false);
    setShowLoginForm(true);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCreateMessage('Your account has been created successfuly');
  };
  
  return (
    <div>
        
    {/* <div> */}
    {showRegisterForm && (
<div>
   <h5>Register</h5> 

      <form onSubmit={handleSubmit}>
       
      <label className='my-1 ' htmlFor="firstname">firstname <span className='text-danger'>*</span></label>
      <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="firstname" value={firstname} onChange={(event) => setfirstname(event.target.value)} required />
        <br />
        <label className='my-1 ' htmlFor="lastname">lastname <span className='text-danger'>*</span></label>
        <br /> <input type="text" className='my-1 w-100  bg-white logininput ' id="lastname" value={lastname} onChange={(event) => setlastname(event.target.value)} required />
        <br />
        <label className='my-1 ' htmlFor="email">Email <span className='text-danger'>*</span></label>
        <br /> <input type="email" className='my-1 w-100 bg-white logininput ' id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <br />
        <label  className='my-1 'htmlFor="password">Password <span className='text-danger'>*</span></label>
        <br />  <input type="password" className='my-1 w-100  bg-white logininput ' id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <br />
        {/* <span className='text-danger'>*</span> */}
        <button type="submit" className='my-2   w-100  btn bg-primary text-light' > <b>Register</b></button>
        <button type="button" className='my-2   w-100  btn btn-outline-secondary text-black' onClick={handleCreateCancel}> <b>Go Login</b></button>
      </form>
      </div>)}
      {CreateMessage&& <p>{CreateMessage}</p>}
      {showLoginForm && (
        <Login></Login>
      )}
    {/* </div> )} */}
    </div>
  );
}

export default Regester;