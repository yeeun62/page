import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import ColorTool from "./tools/ColorTool";
import AddText from "./text/AddText";
import FontFamilyTool from "./text/FontFamilyTool";
import FontSizeTool from "./text/FontSizeTool";
import FontStyleTool from "./text/FontStyleTool";
import TextAlign from "./text/TextAlign";
import Opacity from "./tools/Opacity";
import "./text/font.css";

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: column;
`;

const EditText1 = styled(Padding)`
  display: flex;
  flex-direction: column;
`;

function Text({ canvasState }: any) {
  return (
    <TextWrap>
      <AddText canvasState={canvasState} />
      <ColorTool canvasState={canvasState} />
      <EditText1>
        <FontFamilyTool canvasState={canvasState} />
        <div>
          <FontSizeTool canvasState={canvasState} />
          <FontStyleTool canvasState={canvasState} />
        </div>
      </EditText1>
      <TextAlign canvasState={canvasState} />
      <Opacity canvasState={canvasState} />
    </TextWrap>
  );
}

export default Text;
