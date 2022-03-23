import styled from "styled-components";

const CanvasSection = styled.div`
  .image {
    border: 1px solid red;
  }
`;

interface CanvasProps {
  canvasState: any;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function Canvas({ canvasState, setCanvasState }: CanvasProps) {
  return (
    <CanvasSection>
      <canvas id="canvas" />
    </CanvasSection>
  );
}

export default Canvas;
