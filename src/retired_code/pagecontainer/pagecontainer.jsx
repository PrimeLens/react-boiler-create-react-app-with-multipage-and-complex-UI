import React from 'react';

import './pagecontainer.css';


class Pagecontainer extends React.Component {

  componentDidMount(){


    window.dispatcher.on('hello', (payload)=>{
      console.log('Page component received message', payload);
      const _ = window._;
      _.each(payload[0].split(''),(e,i)=>{/*console.log('-',e);*/});
    });
 
  }



  render() {
    return (
      <div id="pagecontainer">
      </div>
    );
  }
}

export default Pagecontainer;



