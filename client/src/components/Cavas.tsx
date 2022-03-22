import { useState, useEffect } from "react";
import { fabric } from "fabric";
import styled from "styled-components";
import { CanvasSizeType } from "./Editor";

const CanvasSection = styled.div``;

function Canvas({ canvasSize, setCanvasSize, upload }: CanvasSizeType) {
  const [canvasState, setCanvas] = useState({});

  // const initCanvas = () =>

  useEffect(() => {
    setCanvas(
      new fabric.Canvas("canvas", {
        width: canvasSize.width,
        height: canvasSize.height,
        backgroundColor: "#fff",
      })
    );
  }, [canvasSize]);

  return (
    <CanvasSection>
      <canvas id="canvas"></canvas>
    </CanvasSection>
  );
}

export default Canvas;
