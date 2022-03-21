import { useEffect } from "react";
import { fabric } from "fabric";
import styled from "styled-components";
import { CanvasSizeType } from "./Editor";

const CanvasSection = styled.div``;

function Canvas({ canvasSize, setCanvasSize }: CanvasSizeType) {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: canvasSize.width,
      height: canvasSize.height,
      backgroundColor: "#fff",
    });
  }, []);

  return (
    <CanvasSection>
      <canvas id="canvas"></canvas>
    </CanvasSection>
  );
}

export default Canvas;
