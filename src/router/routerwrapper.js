

// PLEASE DO NOT EDIT this file as part of your project, edit addroutes.jsx instead
// Edited ONLY if you are swapping out the choice of router technology

/*
  - currently we are using the director router, in the past I have used the backbone router
    docs for director router are here
    https://github.com/flatiron/director#client-side-routing

    noteworthy issues and hacks
    https://github.com/flatiron/director/issues/199

  - it is important that we can change the router if we need to without rewriting large parts 
    of our app so the purpose of this module is to wrap the choice of router

*/

import director from 'director';
import ReactDOM from 'react-dom';




// *** The following code executes on page load

// init the config object
var routerConfig = {};
// define routeTunnel
routerConfig.routeTunnel = (pageArg, pageHandle)=>{
  var _ = window._;
  var appStatus = window.appStatus;
  var pageChanged = appStatus.currentPage!==pageArg;
  console.log('pageChanged is ', pageChanged, pageChanged ? '':'deeplink changed');
  appStatus.lastPage = appStatus.currentPage;
  appStatus.currentPage = pageArg;
  console.log('currentPage is ', appStatus.currentPage);  
  // ok this router's argument passing kinda sucks (no query string) etc
  // so lets just pull everything from window.location.href
  var temp = window.location.href.split('#')[1];
  if (temp.length>0) temp = temp.substr(1);
  appStatus.currentRoute = temp;
  if (temp.indexOf(pageArg)>=0) {
    // the currentRoute includes the currentPage so remove it
    temp = temp.substr(pageArg.length+1);
  }
  temp = temp.split('?');
  appStatus.currentFragString = temp[0];
  appStatus.currentQueryString = temp[1] ? temp[1] : '';
  appStatus.currentFragsArray =  appStatus.currentFragString ? appStatus.currentFragString.split('/') : [];
  /*  convert query string to Array of objects  */
  appStatus.currentQueryArray = (typeof appStatus.currentQueryString ==='string') ? appStatus.currentQueryString.split('&') : [];
  // filter out any arg that does not contain an '='
  appStatus.currentQueryArray = _.filter(appStatus.currentQueryArray, function(v){ return v.indexOf('=') > -1; });
  // convert to array of objects for currentQueryArray
  // and create the currentQueryObject
  appStatus.currentQueryObject = {};
  _.each(appStatus.currentQueryArray, function(v,i){
      if (v.indexOf('=') > -1) {
        v = v.split('=');
        let t = appStatus.currentQueryArray[i] = {};
        t[v[0]] = v[1];  
        appStatus.currentQueryObject[v[0]] = v[1]; 
      }
  });
  // hook for fireOnceOnAppMounted
  if (appStatus.started === false) {
    appStatus.started = true;
    routerConfig.fireOnceOnAppMounted();
  }
  // TO RENDER OR NOT TO RENDER (forceUpdate instead)
  if (pageChanged) {
    // fire the pre-page change hook
    routerConfig.prePageChange();
    // unmount the old page
    ReactDOM.unmountComponentAtNode(document.getElementById('pageContainer'));
    // render new page and store the pointer
    appStatus.currentComponent = ReactDOM.render(
      pageHandle,
      document.getElementById('pageContainer')
    );
    // fire the post-page change hook
    routerConfig.postPageChange();   
  }else {
    // this is an acceptable use of force update as the parent DOM node 
    // of the component is not React its pure javascript
    appStatus.currentComponent.forceUpdate();
  }
  // appStatus should have completed its mutations so log it
  // console.log('appStatus is ', appStatus);
  // fire the post route change hook
  routerConfig.postRouteChange();
  // broadcast the url change, no payload
  window.dispatcher.trigger('routechange');
  if (pageChanged) {
      window.dispatcher.trigger('pagechange');
  } else {
      window.dispatcher.trigger('deeplinkchange');
  }
} // end routeTunnel() definition


// bring in the developer config
import addroutes from './addroutes.jsx';
addroutes.setup(routerConfig);




// *** The following setup() code executes when told to by index.js and this is after 
// the react app has rendered its components
var setup = ()=>{
  // appStatus should already exist but just in case error check 
  if (!window.appStatus) window.appStatus = {};
  var appStatus = window.appStatus;
  appStatus.currentPage = '';
  appStatus.lastPage = '';
  appStatus.currentRoute = '';
  appStatus.currentFragString = '';
  appStatus.currentFragsArray = [];
  appStatus.currentQueryString = '';
  appStatus.currentQueryArray = [];
  appStatus.currentQueryObject = {};
  appStatus.started = false; 
  appStatus.currentComponent = null;

  //console.log('routerConfig =====> ', routerConfig);
  var router = new director.Router(routerConfig.routes);
  //console.log('router = ', router);

  // An peculiarity with this router is it will interpret '', '/' and '#' all differently
  // The only solution to this I found is to initialize with '#/' indicating just a slash after the hash
  router.init('#/');
}


module.exports = {
  setup
}