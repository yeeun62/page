import { useState } from "react";
import { Tab } from "../../recycleStyle";
import styled from "styled-components";
import FileUpload from "./upload/FileUpload";
import OpacityTool from "./tools/OpacityTool";

const UpLoadWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }
`;

interface UpLoadProps {
  canvasState: any;
}

function UpLoad({ canvasState }: UpLoadProps): React.ReactElement {
  const [uploadTab, setuploadTab] = useState<number>(0);

  return (
    <UpLoadWrap>
      <Tab>
        <button
          onClick={() => setuploadTab(0)}
          style={
            uploadTab === 0
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          업로드
        </button>
        <button
          onClick={() => setuploadTab(1)}
          style={
            uploadTab === 1
              ? { borderBottom: "2px solid #e0de1b" }
              : { border: "none" }
          }
        >
          편집
        </button>
      </Tab>
      {
        [
          <FileUpload canvasState={canvasState} />,
          <OpacityTool canvasState={canvasState} />,
        ][uploadTab]
      }
    </UpLoadWrap>
  );
}

export default UpLoad;
