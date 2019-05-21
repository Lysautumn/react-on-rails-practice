import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  console.log('getThings action');
  return {
    type: GET_THINGS_REQUEST
  };
}

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getThingsButton" onClick={() => this.props.getThings()}>getThings</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
