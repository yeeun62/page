import { useEffect } from "react";
import { fabric } from "fabric";
import styled from "styled-components";
import { EditorProps } from "./Editor";

const CanvasSection = styled.div``;

interface CanvasProps extends EditorProps {
  canvasColor: string;
}

function Canvas({ canvasSize, setCanvasSize, canvasColor }: CanvasProps) {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: canvasSize?.width,
      height: canvasSize?.height,
      backgroundColor: canvasColor,
    });
  }, [canvasColor]);

  return (
    <CanvasSection>
      <canvas id="canvas"></canvas>
    </CanvasSection>
  );
}

export default Canvas;
