import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux';
import {updateUser} from './actions/user-actions';
import {updateProducts} from './actions/products-actions';

class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    console.log('change  onUpdateUser')
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Bruno Maia's Lab
          </p>
          
        </header>
        <div className='App-link' >Update user</div>
        <input onChange={this.onUpdateUser} placeholder='name' />
        
        

      </div>
    );
  }
}

const mapStateToProps = state =>({
  products : state.products,
  user : state.user
});

const mapActionsToProps = {

  onUpdateUser:updateUser,
  onUpdateProducts:updateProducts
};

export default connect(mapStateToProps,mapActionsToProps)(App);
