import React from 'react';

// functional components are javascript functions
// that return a react element
const Intro = (props) => (
  <p className="App-intro">
    {props.message}
  </p>
);

export default Intro;
