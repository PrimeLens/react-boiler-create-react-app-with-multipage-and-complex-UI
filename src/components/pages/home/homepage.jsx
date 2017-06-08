import React from 'react';

class Homepage extends React.Component {
  render() {
    // it is the components job to accommodate undefined field in the store 
    console.log('Homepage rendering');    
    return (
      <div id="homepage">
        <p>
          Lorem ipsum home page sit amet, has an zril laoreet. Et vim eros verear salutatus. 
          Ad nominati expetendis contentiones nec. Solum semper indoctum sit ea, pri id 
          viris euismod quaestio, mollis invidunt eum ad. At ius praesent concludaturque, 
          option interpretaris quo an.
        </p>
      </div>
    );
  }
}

export default Homepage;


