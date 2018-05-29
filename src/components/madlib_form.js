import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactStrap';

class MadLibForm extends Component {
  handleChange = function() {
    console.log('trying to handle change')
  }
  render() {
    return(
      <Row style={{textAlign: 'center', color: 'white'}}>
        <Col md="3">Column
          <Row>
            <Col md="2">
              <label classname="greenLabel">1</label>
            </Col>
            <Col md="10">
              <input placeholder="Color" type="text" onChange={this.handleChange}/>
            </Col>
          </Row>
        </Col>
        <Col md="3">Column
          <Row>
            <Col md="2">
              <label classname="greenLabel">2</label>
            </Col>
            <Col md="10">
              <input placeholder="Color" type="text" onChange={this.handleChange}/>
            </Col>
          </Row>
        </Col>
        <Col md="3">Column</Col>
        <Col md="3">Column</Col>
      </Row>
    );
  }
}

export default MadLibForm;
