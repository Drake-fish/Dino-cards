import React from 'react';
import Card from './Card';
import data from '../data';
const Home=React.createClass({
  render(){
// console.log(this.props);
// var dinosaurs=this.props.map(prop,i,arr){
//   return prop;
// }
// console.log(dinosaurs);
    return(
      <div className="home">
      <h1>Welcome to my Card Collection</h1>
      <img src="https://i.ytimg.com/vi/IGjVh2jN97w/maxresdefault.jpg"/>
      </div>
)
  }
})
export default Home;
