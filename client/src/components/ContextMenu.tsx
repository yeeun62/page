import { useEffect } from "react";
import styled from "styled-components";

const ContextWrap = styled.ul`
  position: absolute;
  overflow: hidden;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

  background: $color-container;
  border: 1px solid #cccccc;
  border-radius: 0.5rem;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  li {
    padding: 10px 60px 10px 13px;
    min-width: 180px;
    cursor: pointer;
    font-size: $font-size-H5;
    font-weight: 500;
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
  contextMenu: boolean;
  pointer: { x: number; y: number };
}

function ContextMenu({ canvasState, contextMenu, pointer }: ContextProps) {
  useEffect(() => {
    const context = document.querySelector(".contextMenu");
    if (context && pointer) {
      context.setAttribute(
        "style",
        `top: ${pointer.y}px; left: ${pointer.x}px`
      );
    }
  }, [pointer]);

  const deleteObject = () => {
    const items = canvasState.getActiveObjects();
    items.forEach((item: any) => {
      canvasState.remove(item);
    });
    canvasState.renderAll();
  };

  return (
    <ContextWrap className="contextMenu">
      <li>앞으로 가져오기</li>
      <li>뒤로 보내기</li>
      <li onClick={deleteObject}>삭제</li>
    </ContextWrap>
  );
}

export default ContextMenu;
