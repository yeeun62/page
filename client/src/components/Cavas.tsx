import { useState, useEffect } from "react";
import { fabric } from "fabric";
import styled from "styled-components";

const CanvasSection = styled.div``;

interface CanvasProps {
  canvasSize: { width: number; height: number };
  canvasColor: string;
  upload: object;
  canvasState: object;
  setCanvasState: React.Dispatch<React.SetStateAction<object>>;
}

function Canvas({
  canvasSize,
  canvasColor,
  upload,
  canvasState,
  setCanvasState,
}: CanvasProps) {
  useEffect(() => {
    console.log(canvasSize);
    setCanvasState(
      new fabric.Canvas("canvas", {
        width: canvasSize.width,
        height: canvasSize.height,
        backgroundColor: canvasColor,
      })
    );
  }, [canvasColor, canvasSize]);

  return (
    <>
      <canvas
        id="canvas"
        width={canvasSize.width}
        height={canvasSize.height}
      ></canvas>
    </>
  );
}

export default Canvas;
