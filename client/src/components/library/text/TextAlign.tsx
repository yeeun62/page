import { useState, useEffect } from "react";
import styled from "styled-components";
import { Padding, background } from "../../../recycleStyle";

const AlignWrapper = styled(Padding)`
  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;

    li {
      cursor: pointer;

      span {
        width: 2.2rem;
        height: 2.2rem;
        line-height: 2.2rem;
        text-align: center;
        color: #333;
      }

      :hover {
        background-color: #eee;
        border-radius: 0.2rem;
      }
    }
  }
`;

function TextAlign({ canvasState }: any) {
  const [align, setAlign] = useState<string>("left");

  useEffect(() => {
    if (canvasState) {
      canvasState.on("mouse:down", () => {
        const items = canvasState.getActiveObjects();
        if (items.length) {
          setAlign(items[0].textAlign);
        } else {
          setAlign("");
        }
      });
    }
  }, [canvasState]);

  function textAlignHandler(align: string) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      setAlign(align);
      obj.textAlign = align;
      canvasState.renderAll();
    }
  }

  return (
    <AlignWrapper>
      <ul>
        <li
          onClick={() => textAlignHandler("left")}
          style={align === "left" ? background[0] : background[1]}
        >
          <span className="material-icons-outlined">format_align_left</span>
        </li>
        <li
          onClick={() => textAlignHandler("center")}
          style={align === "center" ? background[0] : background[1]}
        >
          <span className="material-icons-outlined">format_align_center</span>
        </li>
        <li
          onClick={() => textAlignHandler("right")}
          style={align === "right" ? background[0] : background[1]}
        >
          <span className="material-icons-outlined">format_align_right</span>
        </li>
      </ul>
    </AlignWrapper>
  );
}

export default TextAlign;
