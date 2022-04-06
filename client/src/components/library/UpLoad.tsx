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

function UpLoad({ canvasState }: UpLoadProps) {
  return (
    <UpLoadWrap>
      <FileUpload canvasState={canvasState} />
      <OpacityTool canvasState={canvasState} />
    </UpLoadWrap>
  );
}

export default UpLoad;
