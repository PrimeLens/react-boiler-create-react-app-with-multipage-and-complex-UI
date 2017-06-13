import React from 'react';
import ReactDOM from 'react-dom';





// MOUNT THE CSS FILES TO THE DOM 
import 'global_stylesheet/border-sizing-border-box.css';
import 'global_stylesheet/framework-styles.css';
import 'global_stylesheet/project-global-styles.css';




// ESSENTIAL TOOLS 
//    for vanilla javascript control that need to be mounted to the window
//    assignemts to window should only appear ONCE in the app codebase afterwhich
//    each component should already have access 
import _ from 'lodash';
window._ = _;
import dispatcher from 'libraries/bevent.js';
window.dispatcher = dispatcher;



// CREATE WINDOW LEVEL DATA OBJECTS
// make sure these are in place before rendering React components
import windowDataObjects from 'controllers/windowdataobjects.js';
windowDataObjects.setup();






// REACT COMPONENTS
//    React does not all need to hang from one 'root' node, it works fine with pieces added individually
//    By doing it this way we can give render control of Pagecontainer to a 3rd party router 
//    using the ReactDOM API
import Header from 'components/header/header.jsx';
import Nav from 'components/nav/nav.jsx';
import Footer from 'components/footer/footer.jsx';
import Modalcontainer from 'components/modalcontainer/modalcontainer.jsx';
import Loadercontainer from 'components/spinner/spinner.jsx';
ReactDOM.render(<Header/>, document.getElementById('headerContainer'));
ReactDOM.render(<Nav/>, document.getElementById('navContainer'));
ReactDOM.render(<Footer/>, document.getElementById('footerContainer'));
ReactDOM.render(<Modalcontainer/>, document.getElementById('modalContainer'));
ReactDOM.render(<Loadercontainer/>, document.getElementById('spinnerContainer'));


// test the dispatcher
window.dispatcher.off('hello').on('hello', (payload)=>{
  console.log('App component received message', payload);
});




// to interpret the URL, it is important to do this before maincontroller.setup()
import routerwrapper from 'router/routerwrapper.js';
routerwrapper.setup();


// to control the flow of this app and state management
import maincontroller from 'controllers/maincontroller.js';
maincontroller.setup();






