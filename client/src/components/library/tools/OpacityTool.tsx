import styled from "styled-components";
import React, { useState } from "react";
import { Padding } from "../../../recycleStyle";

const OpacityWrap = styled(Padding)`
  display: flex;
  flex-direction: column;

  .rangeWrap {
    position: relative;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rangebar {
    position: relative;
    width: calc(100% - 84px);
    height: 100%;
  }

  .rangeBgLine {
    position: absolute;
    width: 100%;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: #ddd;
  }

  .rangePointLine {
    width: 100%;
    background-color: #e0de1b;
    transform-origin: 0;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;

    ::-webkit-slider-runnable-track {
      height: 2px;
      background-color: #eee;
    }

    ::-moz-range-track {
      height: 2px;
      background-color: #eee;
    }

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 18px;
      width: 18px;
      margin-top: -8px;
      border-radius: 50%;
      background-color: #e0de1b;
      border: 2px solid #fff;
    }

    ::-moz-range-thumb {
      height: 15px;
      width: 15px;
      margin-top: -7px;
      border-radius: 50%;
      background-color: #e0de1b;
      border: 2px solid #fff;
    }

    :focus::-webkit-slider-thumb {
      border: 8px solid #fef6c4;
      width: 30px;
      height: 30px;
      margin-top: -13.5px;
    }

    :focus::-moz-range-thumb {
      border: 5px solid #faf888;
      width: 23px;
      height: 23px;
      margin-top: -9.5px;
    }
  }

  p {
  }
`;

function OpacityTool({ canvasState }: any): React.ReactElement {
  const [alpha, setAlpha] = useState<number>(100);

  function opacityHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const obj = canvasState.getActiveObject();
    if (obj) {
      const value = Number(e.target.value);
      setAlpha(value);
      obj.opacity = value * 0.01;
      canvasState.renderAll();
    }
  }

  return (
    <OpacityWrap>
      <p className="libraryTitle">불투명도</p>
      <div className="rangeWrap">
        <div className="rangebar">
          <div className="rangeBgLine">
            <div
              className="rangePointLine"
              style={{
                // width: alpha < 80 ? `${alpha}%` : `calc(${alpha}% - 5px)`,
                // width: `${alpha * 2.5}px`,
                transform: `scaleX(${alpha * 0.01})`,
              }}
            ></div>
          </div>
          <input type="range" onChange={opacityHandler} value={alpha} />
        </div>
        <div>
          {/* <input type='text' value/>
          <h6>%</h6> */}
          <p>{alpha} %</p>
        </div>
      </div>
    </OpacityWrap>
  );
}

export default OpacityTool;
