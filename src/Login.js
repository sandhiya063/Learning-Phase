import React from 'react';
import './Login.css'
const Login=()=>{
    return(
        <>
        <center>
        <div className="set">
            
           <b> <h1>Sign in with Email</h1> </b> 
            <p>
              <h2> <b> Make a database with json and document with this login</b></h2>
            </p>
            
            <form>
                
                <div>📧<input type="email" placeholder="enter your email"/></div>
                <br></br>
                <div>🔐<input type="password" placeholder="enter your password"/></div>
                <br></br>
                <a href="#" className='forget'>Forget password?</a>
                <button type="submit">Login</button>
                
                
            </form>
            
            



        </div>
          
        </center>





        </>
    )
}
export default Login