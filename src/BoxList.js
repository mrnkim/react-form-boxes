import React, { useLayoutEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import './BoxList.css'
import { click } from "@testing-library/user-event/dist/click";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function deleteBox(id) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  function renderBoxes() {
    return (
      <div className="BoxList-container">
        {boxes.map((box) => (
          <Box
            key={box.id} 
            id={box.id}
            height={box.height} 
            width={box.width} 
            backgroundColor={box.backgroundColor}
            deleteBox={deleteBox}/>
        ))}
      </div>
    );
  }

  //addBox
  function addBox(box) {
    let newbox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newbox]);
  }

  // NewBoxForm
  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}

export default BoxList