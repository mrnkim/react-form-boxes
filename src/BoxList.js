import React, { useLayoutEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  // box state
  const [boxes, setBoxes] = useState([]);

  // render boxes
  function renderBoxes() {
    return (
      <div>
        {boxes.map((box) => (
          <Box />
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
