import { useEffect } from "react";
import styled from "styled-components";

const ContextWrap = styled.ul`
  position: absolute;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #cccccc;
  border-radius: 0.5rem;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  li {
    padding: 0.5rem;
    width: 180px;
    cursor: pointer;
    color: #333;

    :hover {
      background: #eeeeee;
    }

    :active {
      background: #d7d7d7;
    }
  }
`;

interface ContextProps {
  canvasState: any;
  pointer: { x: number; y: number };
}

function ContextMenu({
  canvasState,
  pointer,
}: ContextProps): React.ReactElement {
  useEffect(() => {
    const context = document.querySelector(".contextMenu");
    if (context && pointer) {
      context.setAttribute(
        "style",
        `top: ${pointer.y}px; left: ${pointer.x}px`
      );
    }
  }, [pointer]);

  const frontObject = () => {
    const items = canvasState.getActiveObjects();
    for (let i = 0; i < items.length; i++) {
      canvasState.bringForward(items[i], true);
    }
    canvasState.renderAll();
  };

  const backObject = () => {
    const items = canvasState.getActiveObjects();
    for (let i = items.length - 1; i >= 0; i--) {
      canvasState.sendBackwards(items[i]);
    }
    canvasState.renderAll();
  };

  const deleteObject = () => {
    const items = canvasState.getActiveObjects();
    items.forEach((item: any) => {
      canvasState.remove(item);
    });
    canvasState.renderAll();
  };

  return (
    <ContextWrap className="contextMenu">
      <li onClick={frontObject}>앞으로 가져오기</li>
      <li onClick={backObject}>뒤로 보내기</li>
      <li onClick={deleteObject}>삭제</li>
    </ContextWrap>
  );
}

export default ContextMenu;
