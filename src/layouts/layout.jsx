import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { BrowserRouter, Link, Switch } from "react-router-dom";

import { Container, Sidebar } from "../components";
import { Home, Settings } from "../pages";

import styles from './layout.css'

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className="container">
          <Sidebar className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/profile">Profile</Link>
          </Sidebar>
          <Container id="mainContainer" className={styles.mainContainer}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Container>
        </Container>
      </BrowserRouter>
    );
  }
}

export default connect()(Layout);
