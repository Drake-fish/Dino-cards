import React from 'react';

const Create=React.createClass({
  render(){
    return(
      <div className="create">
        <h1>Create Your own Dino-Card Below!</h1>
          <form>
            <input type="text" value="" placeholder="What's your dinosaurs name?"/>
            <input type="text" value="" placeholder="What Type of dinosaur is it?"/>
            <input type="text" value="" placeholder="Enter a URL for a picture of the Dinosaur"/>
            <input type="text" value="" placeholder="Give me a bio about your dinosaur"/>
            <input type="text" value="" placeholder="What should I expect with your dinosaur?"/>
            <input type="submit" value="submit"/>
          </form>
      </div>
    )
  }
})
export default Create;
