import React, { useState } from "react";
import styled from "styled-components";
import "../modal/modal.css";
import Canvas from "../components/Cavas";
import Modal from "react-modal";
import CanvasColorPickModal from "../modal/CanvasColorPickModal";

const EditorWrap = styled.section`
  width: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EditortList = styled.div`
  box-sizing: border-box;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.4rem;

  .colorPickIcon {
    position: relative;

    img {
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;
    }
  }
`;

export interface EditorProps {
  canvasSize?: { width: number; height: number };
  setCanvasSize: React.Dispatch<
    React.SetStateAction<{ width: number; height: number }>
  >;
  upload?: string;
}

function Editor({ canvasSize, setCanvasSize }: EditorProps) {
  const [CanvasColorOpen, setCanvasColorOpen] = useState(true);
  const [canvasColor, setCanvasColor] = useState("#fff");

  return (
    <EditorWrap>
      <EditortList style={{ width: canvasSize?.width }}>
        <div className="colorPickIcon">
          <img
            src="img/colorPickBtn.svg"
            alt="색상변경 이미지"
            onClick={() => setCanvasColorOpen(!CanvasColorOpen)}
          />
          <Modal
            isOpen={CanvasColorOpen}
            onRequestClose={() => setCanvasColorOpen(!CanvasColorOpen)}
            parentSelector={() =>
              document.querySelector(".colorPickIcon") as HTMLDivElement
            }
            className="canvasColorPickModal"
            overlayClassName="overlay"
            ariaHideApp={false}
          >
            <CanvasColorPickModal
              setCanvasColorOpen={setCanvasColorOpen}
              setCanvasColor={setCanvasColor}
            />
          </Modal>
        </div>
      </EditortList>
      <Canvas
        canvasSize={canvasSize}
        setCanvasSize={setCanvasSize}
        canvasColor={canvasColor}
        upload={upload}
      />
    </EditorWrap>
  );
}

export default Editor;
