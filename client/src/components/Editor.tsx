import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../modal/modal.css";
import Canvas from "../components/Cavas";
import ColorPickModal from "../modal/ColorPickModal";

const EditorWrap = styled.section`
  width: 100%;
  padding: 3rem;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const EditortList = styled.div`
  box-sizing: border-box;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;

  .canvasColorPickIcon {
    position: relative;

    img {
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;
    }
  }
`;

interface EditorProps {
  canvasSize: { width: number; height: number };
  canvasState: any;
}

function Editor({ canvasSize, canvasState }: EditorProps) {
  const [CanvasColorOpen, setCanvasColorOpen] = useState<boolean>(false);
  const [contextMenu, setContextMenu] = useState<boolean>(false);

  return (
    <EditorWrap
      onClick={() => {
        setContextMenu(false);
      }}
    >
      <EditortList style={{ width: canvasSize.width }}>
        <div className="canvasColorPickIcon">
          <img
            src="img/colorPickBtn.png"
            alt="색상변경 이미지"
            onClick={() => setCanvasColorOpen(!CanvasColorOpen)}
          />
          <Modal
            isOpen={CanvasColorOpen}
            onRequestClose={() => setCanvasColorOpen(!CanvasColorOpen)}
            parentSelector={() =>
              document.querySelector(".canvasColorPickIcon") as HTMLDivElement
            }
            className="canvasColorPickModal"
            overlayClassName="none"
            ariaHideApp={false}
          >
            <ColorPickModal
              setCanvasColorOpen={setCanvasColorOpen}
              canvasState={canvasState}
            />
          </Modal>
        </div>
      </EditortList>
      <Canvas
        canvasState={canvasState}
        contextMenu={contextMenu}
        setContextMenu={setContextMenu}
      />
    </EditorWrap>
  );
}

export default Editor;
