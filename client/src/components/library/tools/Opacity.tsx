import styled from "styled-components";
import React, { useState } from "react";
import { Padding } from "../../../recycleStyle";

const TextOpacityWrapper = styled(Padding)`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .opacityTitle {
    font-size: 1rem;
    height: 30%;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;

    input {
      width: 80%;
    }

    p {
      width: 20%;
      text-align: right;
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
    } else {
      return null;
    }
  }

  return (
    <TextOpacityWrapper>
      <p className="opacityTitle">불투명도</p>
      <div>
        <input type="range" onChange={opacityHandler} value={alpha} />
        <p>{alpha} %</p>
      </div>
    </TextOpacityWrapper>
  );
}

export default Opacity;
