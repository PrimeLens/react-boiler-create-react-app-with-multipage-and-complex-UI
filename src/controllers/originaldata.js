

// DEPENDENCIES

import Promise from 'promise-polyfill'; 
if (!window.Promise) {
  window.Promise = Promise;
}
// https://github.com/github/fetch/issues/357
// https://github.com/github/fetch/issues/275
import 'whatwg-fetch';







// WRAPPER


function fetchWrapper(endPoint){
  var request = new Request(
    'http://localhost:3000/exampleapi/' + endPoint, 
    {
      headers: new Headers({'Authorization': 'mykeys'})
    }
  );
  var fPointer = fetch(request)
  .then(response =>{
    if (!response.ok) { throw Error(response.statusText); }
    return response;
  })
  .then(response => response.json());
  return fPointer;
}



// TO DO

// a separate controller for the login page UI will 
// write the user context to userContext






// WINDOW.ORIGINALDATA
// originalData is meant to be a perfect copy of the data from the server
// originalData gets assigned to the window in windowDataObject
var originalData = {};




// DEFINE GETTERS BELOW, one purpose: to get from an endpoint and store it 
// film list data
if (!originalData['filmList']) originalData['filmList'] = null;
originalData['_getFilmList'] = () => {
  var fPointer = fetchWrapper('filmlist.json');
  fPointer.then(data => {
    originalData['filmList'] = data;
    if (data.results.length ===0 ) {
      let err = 'none returned';
      console.log(err);
      throw Error(err);
    }
  });
  return fPointer;
};




module.exports = originalData;




