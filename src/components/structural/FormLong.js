import React, { Component } from "react"
import Button from "../structural/Button"
import { emailRegex } from "../../assets/ts/utils"

import styled from "styled-components"

const FormLongStyles = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  // label:not([for="checkbox"]) {
  //   // hide label visually but keep them available to screen reader and other assistive technology
  //   border: 0;
  //   clip: rect(0 0 0 0);
  //   height: 1px;
  //   margin: -1px;
  //   overflow: hidden;
  //   padding: 0;
  //   position: absolute;
  //   width: 1px;
  // }

  input:not([type="reset"]),
  textarea {
    background-color: var(--page-grey);
    border: none;
    border-bottom: 1px solid var(--blue-grey);
    margin: var(--base-size) 0;
    padding: var(--base-size);
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    margin: var(--base-size) 0;
  }

  input[type="checkbox"] {
    margin-right: calc(var(--base-size) / 2);
  }

  .message {
    color: var(--hot-pink);
    font-weight: 600;
  }
`

class FormLong extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    checkbox: false,
    validationMessage: "",
  }

  handleInputChange = event => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value,
    })
  }

  onHandleCheckbox = event => {
    this.setState({ checkbox: event.target.checked })
  }

  onHandleSubmit = event => {
    event.preventDefault()
    const isEmailValid = emailRegex(this.state.email)
    const { name, email, subject, message } = this.state
    if (name && email && subject && message) {
      isEmailValid
        ? // --- send form data to a server -- //
          // --- then clear form --- //
          this.setState({
            name: " ",
            email: " ",
            subject: " ",
            message: " ",
            validationMessage: "Thanks! We'll get in touch with you soon.",
          })
        : this.setState({
            validationMessage: `Please enter a valid email address.`,
          })
    } else {
      this.setState({
        validationMessage: `Please ensure all fields are filled correctly.`,
      })
    }
  }

  render() {
    return (
      <FormLongStyles method="post" action="#" onSubmit={this.onHandleSubmit}>
        <label htmlFor="name">First and Last Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={this.state.subject}
          onChange={this.handleInputChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="5"
          value={this.state.message}
          onChange={this.handleInputChange}
        />
        {this.state.validationMessage && (
          <div className="message">{this.state.validationMessage}</div>
        )}
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="checkbox"
            onChange={this.onHandleCheckbox}
          />
          <label htmlFor="checkbox">
            Stay up-to-date with company announcements and updates to our API
          </label>
        </div>
        <Button
          type="submit"
          text="Submit"
          bgColor="transparent-blue-grey"
          alignSelf="flex-start"
        />
      </FormLongStyles>
    )
  }
}

export default FormLong
