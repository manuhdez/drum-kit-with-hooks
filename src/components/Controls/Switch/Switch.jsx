import React, { useState } from 'react';

const Switch = (props) => {
  const [ power, setPower ] = useState(false);

  return (
    <button>{props.text}</button>
  );
};

export default Switch;