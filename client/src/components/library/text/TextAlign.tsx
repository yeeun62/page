import styled from "styled-components";
import { Padding } from "../../../recycleStyle";

const AlignWrapper = styled(Padding)`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;

    li {
      cursor: pointer;

      span {
        display: block;
        width: 2.2rem;
        height: 2.2rem;
        line-height: 2.4rem;
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
  function textAlignHandler(align: string) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      obj.textAlign = align;
      canvasState.renderAll();
    } else {
      return null;
    }
  }

  return (
    <AlignWrapper>
      <ul>
        <li onClick={() => textAlignHandler("left")}>
          <span className="material-icons-outlined ">format_align_left</span>
        </li>
        <li onClick={() => textAlignHandler("right")}>
          <span className="material-icons-outlined">format_align_center</span>
        </li>
        <li onClick={() => textAlignHandler("center")}>
          <span className="material-icons-outlined">format_align_right</span>
        </li>
      </ul>
    </AlignWrapper>
  );
}

export default TextAlign;
