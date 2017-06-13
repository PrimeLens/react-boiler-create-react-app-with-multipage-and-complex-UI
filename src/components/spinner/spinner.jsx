

// Usage

// dispatcher.trigger('spinnerStart', 'getData');
// dispatcher.trigger('spinnerStart', 'loadUsers');
// dispatcher.trigger('spinnerEnd', 'getData');
// dispatcher.trigger('spinnerEnd', 'loadUsers');

// the loader will go away once the stack is emptied


import React from 'react';
import dispatcher from 'libraries/bevent.js';
import _ from 'lodash';
import './spinner.css';
import spinnerGif from 'images/ui/spinner.gif';



class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.stack = [];
    this.state = {show: false};
  }

  componentDidMount(){

    dispatcher.off('spinnerStart').on('spinnerStart', (uniqueString)=>{
      if(!_.includes(this.stack, uniqueString)){
        console.log('spinnerStart(' + uniqueString + ')');
        this.stack.push(uniqueString);
        this.setState({show: true});
      }
    });

    dispatcher.off('spinnerEnd').on('spinnerEnd', (uniqueString)=>{
      var i = _.indexOf(this.stack, uniqueString);
      if (i>-1){
        this.stack.splice(i,1);
        console.log('spinnerEnd(' + uniqueString + ')');
      }
      if (this.stack.length===0){
        this.setState({show: false});
      }

    });
  }
  reset(){
    this.stack = [];
    this.setState({show: false});
  }

  render() {
    return (

      this.state.show &&
      <div id="spinner">
        <div className="spinningMessage">
          <img className="animatedGif" src={spinnerGif} alt=""/>
        </div>
      </div>    

    );
  }
}

export default Spinner;



