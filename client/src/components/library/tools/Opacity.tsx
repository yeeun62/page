import styled from "styled-components";
import React, { useState } from "react";
import { Padding } from "../../../recycleStyle";

const TextOpacityWrapper = styled(Padding)`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    input {
      width: 80%;
    }
  }
`;

function Opacity({ canvasState }: any) {
  const [alpha, setAlpha] = useState<number>(100);

  function opacityHandler(e: React.ChangeEvent<HTMLInputElement>) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      let value = Number(e.target.value);
      setAlpha(value);
      obj.opacity = value * 0.01;
      canvasState.renderAll();
    }
  }

  return (
    <TextOpacityWrapper>
      <p className="libraryTitle">불투명도</p>
      <div>
        <input type="range" onChange={opacityHandler} value={alpha} />
        <p>{alpha} %</p>
      </div>
    </TextOpacityWrapper>
  );
}

export default Opacity;
