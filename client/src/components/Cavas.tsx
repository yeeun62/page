import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import { useState, useEffect } from "react";
import { fabric } from "fabric";

const CanvasWrap = styled.div`
  position: relative;

  .canvas {
    box-shadow: 0 0 5px rgba(158, 158, 158, 0.1);
  }
`;

interface ContextProps {
  canvasState: any;
  contextMenu: boolean;
  setContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function Canvas({
  canvasState,
  contextMenu,
  setContextMenu,
}: ContextProps): React.ReactElement {
  const [pointer, setPointer] = useState<any>({ x: null, y: null });

  useEffect(() => {
    if (Object.keys(canvasState).length) {
      canvasState.on("mouse:down", (event: any) => {
        const items = canvasState.getActiveObjects();
        if (event.button === 3 && items.length) {
          const pointer = new fabric.Point(
            canvasState.getPointer(event.e).x,
            canvasState.getPointer(event.e).y
          );
          setContextMenu(true);
          setPointer({ x: pointer.x, y: pointer.y });
        }
      });
    }
  }, [canvasState]);

  return (
    <CanvasWrap>
      <div>
        {contextMenu && (
          <ContextMenu canvasState={canvasState} pointer={pointer} />
        )}
      </div>
      <canvas id="canvas" />
    </CanvasWrap>
  );
}

export default Canvas;
