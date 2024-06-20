export default function LoginForm() {
 
    return (
      <div className="wrapper">
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input id={"email"} type={"email"}  />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input id={"password"} type={"password"}/>
        </div>
   
        {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
        <div className="errorMessage"></div>
   
        <div className="button">
          <button>Login</button>
        </div>
      </div>
    );
  }