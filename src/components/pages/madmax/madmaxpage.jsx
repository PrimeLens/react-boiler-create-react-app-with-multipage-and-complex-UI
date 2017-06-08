import React from 'react';

class Madmaxpage extends React.Component {
  render() {
    // it is the components job to accommodate undefined field in the store 
    console.log('Madmaxpage rendering');        
    return (
      <div id="madmaxpage">
        <p>
          I live I die I live again
        </p>
      </div>
    );
  }
}

export default Madmaxpage;


