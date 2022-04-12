import { useState } from "react";
import { Padding, Tab } from "../../recycleStyle";
import styled from "styled-components";
import ColorTool from "./tools/ColorTool";
import AddText from "./text/AddText";
import FontFamily from "./text/FontFamily";
import FontSize from "./text/FontSize";
import FontStyle from "./text/FontStyle";
import TextAlign from "./text/TextAlign";
import OpacityTool from "./tools/OpacityTool";
import "./text/font.css";

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditText1 = styled(Padding)`
  display: flex;
  flex-direction: column;
`;

function Text({ canvasState }: any): React.ReactElement {
  const [textTab, setTextTab] = useState<number>(0);

  return (
    //! 클레스네임으로 스타일주기
    <TextWrap>
      <Tab>
        <button
          onClick={() => setTextTab(0)}
          style={
            textTab === 0
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          텍스트
        </button>
        <button
          onClick={() => setTextTab(1)}
          style={
            textTab === 1
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          편집
        </button>
      </Tab>
      {
        [
          <AddText canvasState={canvasState} />,
          <>
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
          </>,
        ][textTab]
      }
    </TextWrap>
  );
}

export default Text;
