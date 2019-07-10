import React, { Component }from 'react';
import { connect } from 'react-redux'
import { Layout } from '../../layouts'


import './App.css';

export class App extends Component {
  render(){
  return (
    <Layout></Layout>
  );
  }
}

export default connect(App);
