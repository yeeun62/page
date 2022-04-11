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
  return (
    <ElementWrap>
      <Shapes canvasState={canvasState} />
      <ColorTool canvasState={canvasState} />
      <OpacityTool canvasState={canvasState} />
    </ElementWrap>
  );
}

export default Element;
