
/***** For Developer Use *****/
/*****   Setup Routes    *****/
/***** Add code to Hooks *****/


// Import and compile page level React components here
// Assign a page pointer to each
import React from 'react';
import Homepage from 'components/pages/home/homepage.jsx';
var pointer_Homepage = <Homepage/>;
import Madmaxpage from 'components/pages/madmax/madmaxpage.jsx';
var pointer_Madmaxpage = <Madmaxpage/>;
import Loginpage from 'components/pages/login/loginpage.jsx';
var pointer_Loginpage = <Loginpage/>;
import Errorpage from 'components/pages/error/errorpage.jsx';
var pointer_Errorpage = <Errorpage/>;



/*****   Setup Routes    *****/
var setup = (routerConfig)=>{
  var routeTunnel = routerConfig.routeTunnel;

  // set up the regex for your routes and pair them with the page pointers
  routerConfig.routes = {
    ''                    : ()=>{routeTunnel('home', pointer_Homepage)},
    '#'                   : ()=>{routeTunnel('home', pointer_Homepage)},
    '/madmax/?((|.)*)'     : ()=>{routeTunnel('madmax', pointer_Madmaxpage)},
    '/login/?((|.)*)'     : ()=>{routeTunnel('login', pointer_Loginpage)},
    '//?((|.)*)'          : ()=>{routeTunnel('error', pointer_Errorpage)}
  }

  /***** Add code to Hooks *****/
  /* 
    Important to understand the difference when I refer to a "page" change and a "route" change.
    As an example, consider the following url changes
      #/furyroad/furiosa
      #/furyroad/max
      #/johnwick
    All of them would qualify as a route change so postRouteChange() would fire every time
    However going from '#/furyroad/furiosa' to '#/furyroad/max' would NOT qualify as a page change
    so prePageChange() and postPageChange() would not fire
  */
  routerConfig.fireOnceOnAppMounted = ()=>{
    // fires once after first route has mounted its page
    // console.log('fireOnceOnAppMounted() just fired');
  }
  routerConfig.prePageChange = ()=>{
    //
    // console.log('prePageChange() just fired');
  };
  routerConfig.postPageChange = ()=>{
    //
    // console.log('postPageChange() just fired');
  };
  routerConfig.postRouteChange = ()=>{
    // console.log('postRouteChange() just fired');
      // CODE PORTED FROM MY 2016 BOILERPALTE 

      // Trigger Pageview Tracking
      // Nux.sendPageview();

      /*
      // check for modal deeplink
      if (this.status.currentFragString) {
          if (this.status.currentFragString.indexOf('modalShow-') > -1) {
              // get the url fragment that contains 'modalShow-'
              var modalFragment = _.find(
                  this.status.currentFragsArray,
                  function(item){ return item.indexOf('modalShow-') === 0; }
              );
              // get the template name out of that url fragment
              var chosenTemplate = modalFragment.replace('modalShow-','');
              // get the index of that fragment out of currentFragsArray
              var p = this.status.currentFragsArray.indexOf(modalFragment);
              // now check to make sure that our modalShow- is the LAST fragment
              // and that chosenTemplate is not an empty string
              // before calling to open the modal
              if (p === this.status.currentFragsArray.length-1  && chosenTemplate!='') {
                  console.log('modalShow detected as the last fragment, opening ', chosenTemplate);
                  grandCentral.trigger( 'modalShow', chosenTemplate ); 
              }
          }
      } else {
          // fire close event anyway in case we are using the browser back button 
          grandCentral.trigger('modalHide');
      }
      */
  }
  
} // end setup



module.exports = { setup };



