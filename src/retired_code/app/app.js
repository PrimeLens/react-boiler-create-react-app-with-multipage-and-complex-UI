
// dependancies for this component
import React, { Component } from 'react';
import './app.css';


// ESSENTIAL tools for vanilla javascript control that need to be mounted to the window
// assignemts to window should only appear ONCE in the app codebase afterwhich
// each component should already have access 
import dispatcher from 'dev_libs/bevent.js';
window.dispatcher = dispatcher;
import _ from 'lodash';
window._ = _;


// to control the flow of this app and state management
import maincontrol from 'controllers/maincontrol.js';

// to interpret the URL
import routerwrapper from 'router/routerwrapper.js';

// child components 
import Header from 'comp/header/header.jsx';
import Nav from 'comp/nav/nav.jsx';
import Pagecontainer from 'comp/pagecontainer/pagecontainer.jsx';
import Footer from 'comp/footer/footer.jsx';
import Modalcontainer from 'comp/modalcontainer/modalcontainer.jsx';
import Loadercontainer from 'comp/loadercontainer/loadercontainer.jsx';


class App extends Component {
  componentDidMount(){
    
    // fire up the main controller
    maincontrol.setup();

    // start the router
    routerwrapper.setup();

    window.dispatcher.on('hello', (payload)=>{
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
