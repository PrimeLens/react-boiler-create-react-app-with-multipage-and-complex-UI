import React from 'react';

import './nav.css';


class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage : ''
    };
  }


  componentDidMount(){
    // this component does not unmount and re-mount like pages and other components do
    // so there is no need to unbind the listener
    window.dispatcher.on('pagechange', ()=>{
      this.setState({
        currentPage: window.appStatus.currentPage
      });
    });
  }

  getClassNameWithActive(arg){
    var className = 'navitem';
    if (arg === this.state.currentPage) {
      className += ' active';
    }
    return className;
  }


  render() {
    return (
    <div id="mainnav">
      <a className={this.getClassNameWithActive('home')} href="#">Home</a>
      <a className={this.getClassNameWithActive('login')} href="#/login">Login</a>
      <a className={this.getClassNameWithActive('madmax')} href="#/madmax/nux?furiosa=111&imomrtanjoe=222">Mad Max</a>
    </div>
    );
  }
}

export default Nav;



