import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ElColorPickModal from "../../../modal/ElColorPickModal";
import { Padding } from "../../../recycleStyle";

const ColorToolWrap = styled(Padding)<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  .elColorWrap {
    position: relative;

    .bigElColor {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 0.2rem;

      .smElColor {
        cursor: pointer;
        border: none;
        border-radius: 0.2rem;
        background: ${(props) => props.color};
        width: 28px;
        height: 28px;
      }
    }
  }
`;

function ColorTool({ canvasState }: any) {
  const [elColorOpen, setElColorOpen] = useState(false);
  const [elColor, setElColor] = useState("#A7A7A8");

  useEffect(() => {
    if (canvasState) {
      canvasState.on("mouse:down", () => {
        const items = canvasState.getActiveObjects();
        if (items.length && true) {
          setElColor(items[0].fill);
        } else {
          setElColor("#A7A7A8");
        }
      });
    }
  }, [canvasState]);

  return (
    <ColorToolWrap color={elColor}>
      <p className="libraryTitle">색상</p>
      <div className="elColorWrap">
        <div
          className="bigElColor"
          onClick={() => setElColorOpen(!elColorOpen)}
        >
          <div className="smElColor"></div>
        </div>
      </div>
      <Modal
        isOpen={elColorOpen}
        onRequestClose={() => setElColorOpen(!elColorOpen)}
        parentSelector={() =>
          document.querySelector(".elColorWrap") as HTMLDivElement
        }
        className="colorPickModal"
        overlayClassName="none"
        ariaHideApp={false}
      >
        <ElColorPickModal
          setElColorOpen={setElColorOpen}
          elColor={elColor}
          setElColor={setElColor}
          canvasState={canvasState}
        />
      </Modal>
    </ColorToolWrap>
  );
}
export default ColorTool;
