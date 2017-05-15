
// to control user flow and state management

var setup = ()=>{

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