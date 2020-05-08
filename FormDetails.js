import React, { Component } from "react";
//import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

/*const ReactCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};*/

class FormDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.continue(event);
    } else {
      this.validated(true);
    }
  };

  handleClick = (e) => {
    this.setState({ validated: true });
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Row>
        <Form.Group as={Col} controlId="userName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={values.userName}
              name="userName"
              onChange={handleChange("userName")}
              required
            />
          </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              value={values.description}
              name="description"
              onChange={handleChange("description")}
              required
            />
          </Form.Group>

         
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="score">
            <Form.Label>Score</Form.Label>
            <Form.Control
              type="number"
              placeholder="Smail"
              value={values.score}
              name="score"
              onChange={handleChange("score")}
              required
            />
          </Form.Group>

      
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="timeCreated">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={values.timeCreated}
              name="timeCreated"
              onChange={handleChange("timeCreated")}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="timeModified">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date"
              value={values.timeModified}
              name="timeModified"
              onChange={handleChange("timeModified")}
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>

        <Form.Group as={Col} controlId="helpfulness">
            <Form.Label>Help</Form.Label>
            <Form.Control
              type="number"
              placeholder="Help"
              value={values.helpfulness}
              name="helpfulness"
              onChange={handleChange("helpfulness")}
              required
            />
          </Form.Group>
        </Form.Row>

        <Button
          onClick={this.handleClick}
          variant="primary"
          type="submit"
          style={styles.button}
        >
          Continue
        </Button>
      </Form>
    );
  }
}

const styles = {
  button: {
    backgroundColor: "#A71D31",
    color: "#F7E7D9",
    border: "none",
    marginRight: "1vw",
    marginTop: "2vh",
    width: "auto",
    height: "auto",
  },
};

export default FormDetails;
