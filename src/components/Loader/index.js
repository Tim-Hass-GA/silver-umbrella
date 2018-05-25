import React from 'react';
import loaderSRC from '../../assests/boy_pixel_walk.gif'

const Loader = props => (
  <div>
    <img
      style={ {padding: 20} }
      alt="loader icon"
      src={loaderSRC}
    />
  </div>
);

export default Loader;
