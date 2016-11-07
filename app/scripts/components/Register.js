import React from 'react';

const Register=React.createClass({
  render(){
    return(
      <div className="register">
      <h1>Sign-Up For My Site!</h1>
      <form>
      <input type="text" value="" placeholder="What's your name?"/>
      <input type="email" value="" placeholder="What's your email?"/>
      <input type="password" value="" placeholder="Password"/>
      <input type="submit" value="submit"/>
      </form>
      </div>
    )
  }
})
export default Register;
