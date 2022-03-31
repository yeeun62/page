import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import ColorTool from "./tools/ColorTool";
import AddText from "./text/AddText";
import FontFamilyTool from "./text/FontFamilyTool";
import FontSizeTool from "./text/FontSizeTool";
import FontStyleTool from "./text/FontStyleTool";

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: column;

  .colorBorder {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
`;

const EditText = styled(Padding)`
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid #ddd;
`;

function Text({ canvasState }: any) {
  return (
    <TextWrap>
      <AddText canvasState={canvasState} />
      <ColorTool canvasState={canvasState} />
      <EditText>
        <FontFamilyTool canvasState={canvasState} />
        <div>
          <FontSizeTool canvasState={canvasState} />
          <FontStyleTool canvasState={canvasState} />
        </div>
      </EditText>
    </TextWrap>
  );
}

export default Text;
