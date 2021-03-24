import React, { Component } from "react";

// Sass
import "./Contact.scss";

// Shared/Components
import TextInfo from "../../../shared/components/TextInfo";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  title = "Contact";
  description =
    "The contact page is one of the most important on your website. For most companies, it is usually one of the most visited pages. ... They include a call to action: this way they keep people on the website and offer another option in case they don't want to fill out the form.";

  handleInputChange(event) {
    console.log(event);
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

  handleClick() {
    console.log('clik');
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__child-content-top">
          <TextInfo title={this.title} description={this.description} />
        </div>

        <div className="contact__child-form">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <button
                  type="button"
                  onClick={this.handleClick}
                  className="btn btn-primary"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
