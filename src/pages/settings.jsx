import React, { Component, Fragment } from "react";
import { Form, Col, Button, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

import { updateBudget, addCategory } from '../actions'

export class Settings extends Component {
  constructor(props){
    super(props)
    this.props = props;
    this.state = this.getInitialState();
  }

  getInitialState(){
    const {totalBudget, categories} = this.props
    return {
      totalBudget,
      categories : {
        value : '',
        options : categories
      }
    }
  }

  update = (e) => {
    const {updateBudget} = this.props;
    updateBudget(this.state.totalBudget)
  }

  addCategory = (e) => {
    const {addCategory} = this.props;
    addCategory(this.state.categories.value)

    this.setState({
      ...this.state,
      categories : {
        ...this.state,
        value : ''
      }
    })
  }

  textInput = (e) => {
    this.setState({
      ...this.state,
      totalBudget : e.target.value
    })
  }

  categoryChange = (e) => {
    this.setState({
      ...this.staate,
      categories: {
        ...this.state,
        value : e.target.value
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
      <Form.Group>
        <Form.Label column sm="2">
          Total Budget
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="budget" onChange={this.textInput} value={this.state.totalBudget}/>
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={this.update}>Update</Button>
      <Form.Group>
        <Form.Label column sm="2">
          Categories
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="budget" onChange={this.categoryChange} value={this.state.categories.value}/>
        </Col>
      </Form.Group>
      <Button variant="primary" onClick={this.addCategory}>Update</Button>
      <ListGroup>
      {this.props.categories.map((cat)=>{
       return <ListGroup.Item key={cat}>{cat}</ListGroup.Item>
      })}
      </ListGroup>
      </Fragment>

    );
  }
}

const mapStateToProps = state => ({
  totalBudget : state.settings.totalBudget || 0,
  categories: state.settings.categories || []
});

const mapDispatchToProps = {
  updateBudget,
  addCategory
};

export default connect(mapStateToProps,mapDispatchToProps)(Settings)
