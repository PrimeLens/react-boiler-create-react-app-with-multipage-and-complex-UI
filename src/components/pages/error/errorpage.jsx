import React from 'react';

class Errorpage extends React.Component {
  render() {
    // it is the components job to accommodate undefined field in the store 
    console.log('Errorpage rendering');    
    return (
      <div id="errorpage">
        <p>
          not a valid route beeeeyatch
        </p>
      </div>
    );
  }
}

export default Errorpage;


