import styled from "styled-components";
import { fabric } from "fabric";
import { Menu, Item, useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";

const CanvasSection = styled.div`
  position: relative;

  .deleteBtn {
    width: 1.2rem;
    margin-right: 5px;
  }

  canvas {
    box-shadow: 0 0 5px rgba(158, 158, 158, 0.1);
  }
`;

function Canvas(canvasState: any) {
  const { show } = useContextMenu({
    id: "canvasCtx",
  });

  function handleContextMenu(event: any) {
    event.preventDefault();
    show(event, {
      props: {
        key: "value",
      },
    });
  }

  return (
    <>
      <CanvasSection id="canvasWrapper" onContextMenu={handleContextMenu}>
        <canvas id="canvas" />
        <CanvasCtxMenu canvasState={canvasState} />
      </CanvasSection>
    </>
  );
}

function CanvasCtxMenu(canvasState: any) {
  function deleteObj() {
    var activeObject = canvasState.getActiveObject,
      activeGroup = canvasState.getActiveGroup;
    if (activeGroup) {
      if (window.confirm("지우시겠습니까?")) {
        canvasState.forEachObject((obj: any) => canvasState.remove(obj));
      }
    }
    // let selected = canvasState.getActiveGroup;
    // let selGroup = new fabric.ActiveSelection(selected, {
    //   canvas: canvasState,
    // });
    // if (selGroup) {
    //   if (window.confirm("지우시겠습니까?")) {
    //     selGroup.forEachObject((obj) => {
    //       canvasState.item(obj).remove();
    //     });
    //     canvasState.renderAll();
    //   }
    // }
    else {
      return false;
    }
  }

  function deleteAll() {
    canvasState.clear();
  }

  return (
    <Menu id="canvasCtx">
      <Item onClick={deleteObj}>
        <img src="./img/delete.png" alt="요소 삭제하기" className="deleteBtn" />
        <p>삭제하기</p>
      </Item>
    </Menu>
  );
}

export default Canvas;
