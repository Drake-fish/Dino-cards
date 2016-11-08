import Data from '../data';
import React from 'react';

const Card=React.createClass({
  render(){
    console.log(this.props);
    return(
      <div className="card-container">
        <div className="flipper">
        <div className="back">
          <h1>{this.props.data.name}</h1>
          <h2>{this.props.data.Type}</h2>
          <img src={this.props.data.picture}/>
          <span className="bio">Bio:</span><p>{this.props.data.Bio}</p>
          <span>What to expect:  {this.props.data.Danger}</span>
        </div>
      <div className="front">
        <h1 className="card-back">{this.props.data.name}</h1>
      </div>
        </div>
          </div>);
  }
});
export default Card;
