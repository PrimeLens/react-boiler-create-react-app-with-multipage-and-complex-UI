
// dependancies for this component
import React, { Component } from 'react';
import './app.css';


// ESSENTIAL tools for vanilla javascript control that need to be mounted to the window
// assignemts to window should only appear ONCE in the app codebase afterwhich
// each component should already have access 
import dispatcher from 'libraries/bevent.js';
window.dispatcher = dispatcher;
import _ from 'lodash';
window._ = _;


// to control the flow of this app and state management
import maincontrol from 'controllers/maincontrol.js';

// to interpret the URL
import routerwrapper from 'router/routerwrapper.js';

// child components 
import Header from 'components/header/header.jsx';
import Nav from 'components/nav/nav.jsx';
import Pagecontainer from 'components/pagecontainer/pagecontainer.jsx';
import Footer from 'components/footer/footer.jsx';
import Modalcontainer from 'components/modalcontainer/modalcontainer.jsx';
import Loadercontainer from 'components/spinner/spinner.jsx';


class App extends Component {
  componentDidMount(){
    
    // fire up the main controller
    maincontrol.setup();

    // start the router
    routerwrapper.setup();

    window.dispatcher.off('hello').on('hello', (payload)=>{
      console.log('App component received message', payload);
    });

  }
  render() {
    return (
      <div id="app">
        <Header/>
        <Nav/>
        <Pagecontainer/>
        <Footer/>
        <Modalcontainer/>
        <Loadercontainer/>
      </div>
    );
  }
}

export default App;
