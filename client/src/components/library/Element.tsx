import { useState } from "react";
import { Tab } from "../../recycleStyle";
import styled from "styled-components";
import Shapes from "./element/Shapes";
import ColorTool from "./tools/ColorTool";
import OpacityTool from "./tools/OpacityTool";

const ElementWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Element({ canvasState }: any): React.ReactElement {
  const [elementTab, setElementTab] = useState<number>(0);

  return (
    <ElementWrap>
      <Tab>
        <button
          onClick={() => setElementTab(0)}
          style={
            elementTab === 0
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          요소
        </button>
        <button
          onClick={() => setElementTab(1)}
          style={
            elementTab === 1
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          편집
        </button>
      </Tab>
      {
        [
          <Shapes canvasState={canvasState} />,
          <>
            <ColorTool canvasState={canvasState} />
            <OpacityTool canvasState={canvasState} />
          </>,
        ][elementTab]
      }
    </ElementWrap>
  );
}

export default Element;
