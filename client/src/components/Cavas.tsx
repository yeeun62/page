import styled from "styled-components";

const CanvasSection = styled.div`
  .image {
    border: 1px solid red;
  }
`;

interface CanvasProps {
  canvasState: any;
}

function Canvas({ canvasState }: CanvasProps) {
  return (
    <CanvasSection>
      <canvas id="canvas" />
    </CanvasSection>
  );
}

export default Canvas;
