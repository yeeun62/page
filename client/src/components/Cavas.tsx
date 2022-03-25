import styled from "styled-components";

const CanvasSection = styled.div`
  .image {
    border: 1px solid red;
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
