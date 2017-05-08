


// to control user flow and state management

var setup = ()=>{

  // protect against old IE console errors
  try { 
    console.log(' '); 
  } 
  catch (e) {
      window.console = {};
      window.console.log = function(txt){};
      window.console.warn = function(txt){};
      window.console.error = function(txt){};
  }

    setTimeout(()=>{ 
      window.dispatcher.trigger('hello', ['my payload']);
    }, 3000);

  // var dispatcher = window.dispatcher; 
  // console.log('dispatcher ', dispatcher);
  // console.log('maincontrol now setup and running');  
}







module.exports = {
  setup
}