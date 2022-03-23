import { useEffect } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

const CanvasSection = styled.div`
  .image {
    border: 1px solid red;
  }
`;

interface CanvasProps {
  canvasSize: { width: number; height: number };
  canvasColor: string;
  canvasState: any;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function Canvas({
  canvasSize,
  canvasColor,
  canvasState,
  setCanvasState,
}: CanvasProps) {
  useEffect(() => {
    setCanvasState(
      new fabric.Canvas("canvas", {
        width: canvasSize.width,
        height: canvasSize.height,
        backgroundColor: canvasColor,
      })
    );
  }, [canvasColor, canvasSize]);

  return (
    <CanvasSection>
      <canvas id="canvas" width={canvasSize.width} height={canvasSize.height} />
    </CanvasSection>
  );
}

export default Canvas;
