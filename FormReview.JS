import React, { Component } from "react";
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSucces from "./FormSucces";
import FormFail from "./FormFail";
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.success = false;
    this.message = "";
    this.state = {
      step: 1,
      userName: "",
      score: "",
      description: "",
      timeCreated: "",
      timeModified: "",
      helpfulness: "",
      
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  addFormDetails = (e, data) => {
    e.preventDefault();
    let d = data.timeCreated.substr(0,10);
    let h = data.timeModified.substr(11);
    this.setState({
      userName: data.userName,
      score: data.score,
      description: data.description,
      timeCreated: d,
      timeModified: h,
      helpfulness: data.helpfulness,
    });
  };

  modifySuccess = (succes, message) => {
    console.log("succes primit " + succes);
    this.success = succes;
    this.message = message;
  };

  render() {
    const { step } = this.state;
    const {
      userName ,
      score ,
      description ,
      timeCreated ,
      timeModified ,
      helpfulness ,
    } = this.state;
    const values = {
      userName ,
      score ,
      description ,
      timeCreated ,
      timeModified ,
      helpfulness ,
    };
    switch (step) {
      case 1:
        return (
          <FormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormConfirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            addFormDetails={this.addFormDetails}
            values={values}
            modifySuccess={this.modifySuccess}
          />
        );
      case 3:
        return this.success === true ? (
          <FormSucces />
        ) : (
          <FormFail response={this.message} prevStep={this.prevStep} />
        );
      default:
        return null;
    }
  }
}

export default UserForm;
