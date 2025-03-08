//// filepath: frontend/src/components/OutputDisplay.js
import React from 'react';

const OutputDisplay = ({ output }) => {
  return (
    <div className="output-display">
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default OutputDisplay;