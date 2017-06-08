
// to control user flow and state management

var setup = ()=>{


  // a test
  setTimeout(()=>{ 
    window.dispatcher.trigger('hello', ['my payload']);
  }, 3000);



  /******** START A BUNCH OF CALLS FOR DATA **********/

  var originalData = window.originalData;
  var dispatcher = window.dispatcher

  // show main site loader, this prevents user interaction
  dispatcher.trigger('loaderStart', 'mainApp');
  // activate getter
  originalData._getFilmList()
    .then(()=>{
      // close main site loader, this allows user interaction
      dispatcher.trigger('loaderEnd', 'mainApp');
    })
    .catch(err => {
      // TO DO HANDLE ERROR WITH GRACEFUL UI
      console.error(err); 
    })
    .then(()=>{
      if (window.originalData['filmList']) {
        // ingest_filmList();
        // data is now in store, lets tell the presentation layer to re-render
        window.dispatcher.trigger('ui-updateFilmList');
      } 
    });
  // end promise chain
 



  
}







module.exports = {
  setup
}