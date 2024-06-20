import { useState } from "react";
export default function LoginForm() {
    const [emailState, setEmail] = useState('');
    const [passState, setPass] = useState('');
    const [error, setError] = useState('');

    const handleClick = async () => {
        setError('');
        try {
            await login({emailState, passState});
            console.log("Login Successful");
        } catch (error) {
            setError(error.message)
        }
    }
 
    return (
      <div className="wrapper">
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input id={"email"} type={"email"} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} type={"password"} onChange={(e) => setPass(e.target.value)}/>
        </div>
   
        {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
        <div className="errorMessage"></div>
   
        <div className="button">
          <button onClick={handleClick}>Login</button>
        </div>
      </div>
    );
  }