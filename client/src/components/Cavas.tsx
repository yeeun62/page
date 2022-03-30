import styled from "styled-components";
import ContextMenu from "./ContextMenu";
import { useState, useEffect } from "react";
import { fabric } from "fabric";

const CanvasWrap = styled.div<inputProps>`
  position: relative;
  div {
    position: relative;
  }

  .canvas {
    box-shadow: 0 0 5px rgba(158, 158, 158, 0.1);
  }

  .inputEl {
    position: absolute;
    border: none;
    background: white;
    border: none;
    padding: 2px;
  }

  #input1 {
  }

  input#${(props) => props.inputStyle.id} {
    width: ${(props) => props.inputStyle.width}px;
    height: ${(props) => props.inputStyle.height}px;
    left: ${(props) => props.inputStyle.left}px;
    top: ${(props) => props.inputStyle.top}px;
  }
`;

interface ContextProps {
  canvasState: any;
  contextMenu: boolean;
  setContextMenu: React.Dispatch<React.SetStateAction<boolean>>;
  inputStyle: {
    width: number;
    height: number;
    top: number;
    left: number;
    id: string;
  };
}

interface inputProps {
  inputStyle: {
    width: number;
    height: number;
    top: number;
    left: number;
    id: string;
  };
}

function Canvas({
  canvasState,
  contextMenu,
  setContextMenu,
  inputStyle,
}: ContextProps) {
  const [pointer, setPointer] = useState<any>({ x: null, y: null });
  useEffect(() => {
    if (Object.keys(canvasState).length) {
      canvasState.on("mouse:down", (event: any) => {
        if (event.button === 1) {
          setContextMenu(false);
        } else if (event.button === 3) {
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
    <CanvasWrap id="canvasWrapper" inputStyle={inputStyle}>
      <div className="test">
        {contextMenu && (
          <ContextMenu
            canvasState={canvasState}
            contextMenu={contextMenu}
            pointer={pointer}
          />
        )}
      </div>
      <canvas id="canvas" />
    </CanvasWrap>
  );
}

export default Canvas;
