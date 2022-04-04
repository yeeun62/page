import styled from "styled-components";
import React, { useState } from "react";
import { Padding } from "../../../recycleStyle";

const TextOpacityWrapper = styled(Padding)`
  display: flex;
  flex-direction: column;

  .rangePtagWrap {
    display: flex;
    justify-content: space-between;
    height: 3rem;

    .rangeWrap {
      width: 80%;
      position: relative;
    }

    .opacityValue {
      height: 2px;
      background-color: #e0de1b;
      position: absolute;
      top: 50%;
    }

    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
      height: 100%;
      cursor: pointer;
      background: transparent;

      ::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        border-radius: 2rem;
        width: 100%;
        height: 2px;
        background-color: #eee;
      }

      ::-moz-range-track {
        appearance: none;
        border-radius: 2rem;
        width: 100%;
        height: 2px;
      }

      ::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        margin-top: -7px;
        border-radius: 50%;
        background-color: #e0de1b;
        border: 1.5px solid #fff;
      }

      ::-moz-range-thumb {
        appearance: none;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: #e0de1b;
        border: 1.5px solid #fff;
      }

      :focus {
        outline: none;
      }

      :focus::-webkit-slider-thumb {
        border: 5px solid #faf888;
        width: 23px;
        height: 23px;
        margin-top: -9.5px;
      }

      :focus::-moz-range-thumb {
        border: 5px solid #faf888;
        width: 23px;
        height: 23px;
        margin-top: -9.5px;
      }
    }
    p {
      width: 20%;
      line-height: 3rem;
      text-align: center;
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
      <div className="rangePtagWrap">
        <div className="rangeWrap">
          <div
            className="opacityValue"
            style={{
              width: alpha < 80 ? `${alpha}%` : `calc(${alpha}% - 5px)`,
            }}
          ></div>
          <input type="range" onChange={opacityHandler} value={alpha} />
        </div>
        <p>{alpha} %</p>
      </div>
    </TextOpacityWrapper>
  );
}

export default Opacity;
