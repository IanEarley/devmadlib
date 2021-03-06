import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactStrap';

class MadLibForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colorOne: '',
      pluralNoun: '',
      adjectiveOne: '',
      celebrityOne: ''
    }
  }
  handleChange = function(props) {
    return function(event){
      this.setState({[props.inputTitle]: event.target.value});
      console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
    }.bind(this);
  }
  render() {
    return(
      <Row style={{textAlign: 'center', color: 'white'}}>
        <Col md="3">Column
          <Row>
            <Col md="2">
              <label className="greenLabel">1</label>
            </Col>
            <Col md="10">
              <input placeholder="Color" type="text" onChange={this.handleChange({inputTitle: "colorOne"})}/>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="inputDescription">Color</div>
            </Col>
          </Row>
        </Col>
        <Col md="3">Column
          <Row>
            <Col md="2">
              <label className="greenLabel">2</label>
            </Col>
            <Col md="10">
              <input placeholder="Noun (Plural)" type="text" onChange={this.handleChange({inputTitle: "pluralNoun"})}/>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="inputDescription">Noun (Plural)</div>
            </Col>
          </Row>
        </Col>
        <Col md="3">Column
           <Row>
            <Col md="2">
              <label className="greenLabel">2</label>
            </Col>
            <Col md="10">
              <input placeholder="Adjective" type="text" onChange={this.handleChange({inputTitle: "adjectiveOne"})}/>
            </Col>
          </Row>     
          <Row>
            <Col md="12">
              <div className="inputDescription">Adjective</div>
            </Col>
          </Row>
        </Col>
        <Col md="3">Column
          <Row>
            <Col md="2">
              <label className="greenLabel">2</label>
            </Col>
            <Col md="10">
              <input placeholder="Celebrity" type="text" onChange={this.handleChange({inputTitle: "celebrityOne"})}/>
            </Col>
          </Row>     
          <Row>
            <Col md="12">
              <div className="inputDescription">Celebrity</div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MadLibForm;
