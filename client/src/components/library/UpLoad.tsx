import styled from "styled-components";
import FileUpload from "./upload/FileUpload";
import OpacityTool from "./tools/OpacityTool";
import { Canvas } from "fabric/fabric-impl";

const UpLoadWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
  }
`;

interface UpLoadProps {
  canvasState: Canvas | undefined;
}

function UpLoad({ canvasState }: UpLoadProps): React.ReactElement {
  return (
    <UpLoadWrap>
      <FileUpload canvasState={canvasState} />
      <OpacityTool canvasState={canvasState} />
    </UpLoadWrap>
  );
}

export default UpLoad;
