import styled from "styled-components";
import Canvas from "../components/Cavas";

const EditorWrap = styled.section`
  width: 100%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export interface CanvasSizeType {
  canvasSize: { width: number; height: number };
  setCanvasSize: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
}

function Editor({ canvasSize, setCanvasSize }: CanvasSizeType) {
  return (
    <EditorWrap>
      <Canvas canvasSize={canvasSize} setCanvasSize={setCanvasSize} />
    </EditorWrap>
  );
}

export default Editor;
