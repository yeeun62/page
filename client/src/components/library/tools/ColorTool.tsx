import { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import ElColorPickModal from "../../../modal/ElColorPickModal";

const ColorToolWrap = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem;
  width: 100%;
  height: 60px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;

  p {
    font-size: 0.9rem;
    color: #333;
  }

  .elColorWrap {
    position: relative;

    .bigElColor {
      position: relative;
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
        background-color: ${(props) => props.color};
        width: 85%;
        height: 85%;
      }
    }
  }
`;

function ColorTool({ canvasState }: any) {
  const [elColorOpen, setElColorOpen] = useState(false);
  const [elColor, setElColor] = useState("#DDD");

  return (
    <ColorToolWrap color={elColor}>
      <p>색상</p>
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
        className="canvasColorPickModal"
        overlayClassName="none"
        ariaHideApp={false}
      >
        <ElColorPickModal
          setElColorOpen={setElColorOpen}
          setElColor={setElColor}
          canvasState={canvasState}
        />
      </Modal>
    </ColorToolWrap>
  );
}
export default ColorTool;
