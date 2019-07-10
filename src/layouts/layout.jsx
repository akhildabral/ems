import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { BrowserRouter, Link, Switch } from "react-router-dom";

import { Sidebar } from "../components";
import { Home, Settings } from "../pages";

import { Container, Row ,Col} from "react-bootstrap";

import "./layout.css";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container className='container' fluid={true}>
          <Row noGutters={true}>
              <Sidebar className="sidebar">
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/profile">Profile</Link>
              </Sidebar>
            <Col>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/settings" component={Settings} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}

export default connect()(Layout);
