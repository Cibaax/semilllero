import React, { useState } from "react";
import './Test.css'
const Box = ({ id, selected, onMouseOver }) => {
    return (
      <div
        className="box"
        onMouseOver={() => onMouseOver(id)}
        onMouseOut={() => onMouseOver(null)}
        style={{ opacity: id === selected ? 1 : 0.5 }}
      >
        {id}
      </div>
    );
  };
  
  const Test = () => {
    const [selectedBox, setSelectedBox] = useState(null);
  
    return (
      <div className="container">
        <Box id={1} selected={selectedBox} onMouseOver={setSelectedBox} />
        <Box id={2} selected={selectedBox} onMouseOver={setSelectedBox} />
        <Box id={3} selected={selectedBox} onMouseOver={setSelectedBox} />
      </div>
    );
  };
  
  export default Test;
