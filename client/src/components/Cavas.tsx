import styled from "styled-components";

const CanvasSection = styled.div`
  .image {
    border: 1px solid red;
  }

  canvas {
    box-shadow: 0 0 5px rgba(158, 158, 158, 0.1);
  }
`;

function Canvas() {
  return (
    <CanvasSection>
      <canvas id="canvas" />
    </CanvasSection>
  );
}

export default Canvas;
