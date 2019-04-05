import React from 'react';

const slider = (props) => {
  return (
    <React.Fragment>
      <label htmlFor="">{props.label}</label>
      <input type="range" name={props.name} id={props.name} min={props.min} max={props.max} />
    </React.Fragment>
  );
};

export default slider;