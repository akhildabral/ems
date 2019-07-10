import React, { Component, Fragment } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";

export class Settings extends Component {
  constructor(props){
    super(props)
    this.props = props;
  }

  update = () => {
    console.log("Update Clicked")
  }

  render() {
    return (
      <Fragment>
      <Form.Group>
        <Form.Label column sm="2">
          Total Budget
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={this.update}>Update</Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  
};

export default connect(mapStateToProps,mapDispatchToProps)(Settings)
