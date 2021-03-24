import React, { Component } from "react";

class TextInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="jumbotron">
            <h1 className="display-4">{this.props.title}</h1>
            <p className="lead">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextInfo;
