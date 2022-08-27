import React from 'react'
import './MyCss.css'

 function Login() {
  return (
    
      <div class="A">
      <form className="B" >
        
  <div classname="form-group ">
    <label  class="textBold">User Id</label>
    <input type="email"  class="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group mt-3 ">
    <label for="exampleInputPassword1" class="textBold">Password</label>
    <input type="password" class="form-control mt-3 " id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <a>Login</a>
  
</form>
    </div>
    
   
  )
}
export default Login;