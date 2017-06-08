



import originalData from 'controllers/originaldata.js';
import _ from 'lodash';



var setup =()=>{

  // appStatus (used by the router wrapper to record changes in the URL for all to see)
  if (!window.appStatus) window.appStatus = {};

  // determine if a environment is passed 
  if (true) {
    window.appStatus.env = 'staging';
  } else {
    window.appStatus.env = 'production';
  }




  // to store userContext, originalData from the server and transformedData
  // as well as methods for get, post and transform  
  window.originalData = originalData;
  if (originalData.setup) originalData.setup();





  // to keep transformed data that is different to the endpoints
  window.transformedData = {};




  // to keep 'model like' data that React components will bind to
  // will be a 1:1 representation of what is in the UI
  window.stores = {};






} // end setup



module.exports = { setup }




