import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import ColorTool from "./tools/ColorTool";
import AddText from "./text/AddText";
import FontFamily from "./text/FontFamily";
import FontSize from "./text/FontSize";
import FontStyle from "./text/FontStyle";
import TextAlign from "./text/TextAlign";
import OpacityTool from "./tools/OpacityTool";
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
        <FontFamily canvasState={canvasState} />
        <div>
          <FontSize canvasState={canvasState} />
          <FontStyle canvasState={canvasState} />
        </div>
      </EditText1>
      <TextAlign canvasState={canvasState} />
      <OpacityTool canvasState={canvasState} />
    </TextWrap>
  );
}

export default Text;
