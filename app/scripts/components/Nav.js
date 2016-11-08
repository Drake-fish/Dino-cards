import Data from '../data';
import React from 'react';

const Nav=React.createClass({
  render(){
    console.log(this.props);
    return(
      <ul className="nav">
        <li><a href="#">Home</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#creator">Create your own</a></li>
        <li><a href="#card/0">T-REX</a></li>
        <li><a href="#card/1">Pterodactyl</a></li>
        <li><a href="#card/2">Stegosaurus</a></li>
        <li><a href="#card/3">Brachiosaurus</a></li>
        <li><a href="#card/4">Velociraptor</a></li>
      </ul>
    )
  }
});
export default Nav;
