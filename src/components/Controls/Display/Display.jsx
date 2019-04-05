import React from 'react';

const display = (props) => {
  return (
    <div className="display">
      <p className="display__text">
        {props.content}
      </p>
    </div>
  );
};

export default display;