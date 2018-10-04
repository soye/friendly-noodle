import React from 'react';

function Stats(props) {
  function paragraph(key, value) {
    return (
      <p>
        {key}: {value}
      </p>
    );
  }

  return (
    <div>
      {paragraph('Snake length', props.snakeLength)}
      {paragraph('Mice friends', props.mice)}
      {paragraph('Arrow key', props.arrowKey)}
      {paragraph('Position', `(${props.xPos}, ${props.yPos})`)}
    </div>
  );
}

export default Stats;
