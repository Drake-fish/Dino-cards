import React from 'react';

const Login=React.createClass({
  render(){
    return(
      <div className="login">
        <h1>Sign In!</h1>
          <form>
            <input type="email" value="" placeholder="What's your email?"/>
            <input type="password" value="" placeholder="Password"/>
            <input type="submit" value="submit"/>
          </form>
      </div>
    )
  }
})
export default Login;
