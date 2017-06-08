import React from 'react';

class Loginpage extends React.Component {
  render() {
    // it is the components job to accommodate undefined field in the store 
    console.log('Loginpage rendering');        
    return (
      <div id="loginpage">
        <p>
          Hand over the secret string
        </p>
      </div>
    );
  }
}

export default Loginpage;


