import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import NavContainer from './containers/nav';
import ReadContainer from './containers/Read';
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let article = null;
    if (this.props.mode === 'READ') {
      article = <ReadContainer></ReadContainer>
    } else if (this.props.mode === 'WELCOME') {
      article = <ReadContainer></ReadContainer>
    } else if (this.props.mode === 'CREATE') {
      article = <CreateContainer></CreateContainer>
    } else if (this.props.mode === 'UPDATE') {
      article = <UpdateContainer></UpdateContainer>
    } 
    return ( 
      <div className="App">
        <Header></Header>
        <NavContainer></NavContainer>
        <ControlContainer></ControlContainer>
        {article}
      </div>
    );
  }
  
  
}

export default connect(
  function(state) {
    return {
      mode: state.mode
    }
  }
)(App);