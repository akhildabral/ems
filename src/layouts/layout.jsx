import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import { Container, Sidebar } from '../components'
import {Home, Settings} from '../pages'

class Layout extends Component{
  
  render(){
    return (
      <Fragment>
        <Container className='container'>
          <Sidebar className='sidebar'>
            <div>Sidebar</div>
          </Sidebar>
          <Container id="main-container">
              <Home />
          </Container>
        </Container>
      </Fragment>
    )
  }
}

export default connect()(Layout)