import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import ColorTool from "./tools/ColorTool";
import AddText from "./text/AddText";
import FontFamilyTool from "./text/FontFamily";
import FontSizeTool from "./text/FontSize";
import FontStyleTool from "./text/FontStyle";
import TextAlign from "./text/TextAlign";
import Opacity from "./tools/OpacityTool";
import "./text/font.css";

const TextWrap = styled.div`
  display: flex;
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
