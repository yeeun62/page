import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { fabric } from "fabric";
import ColorTool from "./tools/ColorTool";
import Opacity from "./tools/Opacity";

const ElementWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .colorBorder {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;

const Shape = styled(Padding)`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.4rem;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 90px;
      height: 90px;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 85%;
      }
    }
  }
`;

function Element({ canvasState }: any) {
  const addRect = () => {
    const rect = new fabric.Rect({
      fill: "#a7a7a8",
      width: 100,
      height: 100,
    });
    canvasState.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      fill: "#a7a7a8",
      radius: 50,
    });
    canvasState.add(circle);
  };

  const addTriangle = () => {
    const triangle = new fabric.Triangle({
      fill: "#a7a7a8",
      width: 100,
      height: 100,
    });
    canvasState.add(triangle);
  };

  return (
    <ElementWrap>
      <Shape>
        <p>도형</p>
        <ul>
          <li onClick={addRect}>
            <img src="img/rect.png" alt="정사각형" />
          </li>
          <li onClick={addCircle}>
            <img src="img/circle.png" alt="원" />
          </li>
          <li onClick={addTriangle}>
            <img src="img/triangle.png" alt="세모" />
          </li>
        </ul>
      </Shape>
      <ColorTool canvasState={canvasState} />
      <Opacity canvasState={canvasState} />
    </ElementWrap>
  );
}

export default Element;
