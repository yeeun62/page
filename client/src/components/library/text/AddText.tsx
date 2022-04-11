import { useEffect } from "react";
import styled from "styled-components";
import { Padding } from "../../../recycleStyle";
import { fabric } from "fabric";

const TextAdd = styled(Padding)`
  display: flex;
  flex-direction: column;

  button {
    text-align: left;
    padding-left: 0.8rem;
    color: #343434;
    background-color: #eee;
    border-radius: 0.2rem;
    margin: 0.2rem 0rem;
  }

  .titleTxt {
    height: 56px;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .subtitleTxt {
    height: 48px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .mainTxt {
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
  }
`;

function AddText({ canvasState }: any): React.ReactElement {
  const addText = (weight: number, size: number, text: string) => {
    const canvasText = new fabric.Textbox(text, {
      fontWeight: weight,
      fontSize: size,
      fontFamily: "Times new Roman",
      fill: "#000000",
      editingBorderColor: "#000",
      underline: false,
      textAlign: "left",
      // borderColor: "#000",
      // cornerColor: "#9a9a9a",
      // cornerStyle: "circle",
      // cornerSize: 7,
      // borderOpacityWhenMoving: 0,
      // backgroundColor: "#ddd",
      // stroke: "pink",
    });
    return canvasState.add(canvasText);
  };

  return (
    <TextAdd>
      <p className="libraryTitle">텍스트 추가</p>
      <button
        className="titleTxt"
        onClick={() => addText(800, 48, "제목텍스트")}
      >
        제목 텍스트
      </button>
      <button
        className="subtitleTxt"
        onClick={() => addText(500, 30, "부제목텍스트")}
      >
        부제목 텍스트
      </button>
      <button
        className="mainTxt"
        onClick={() => addText(300, 16, "본문텍스트")}
      >
        본문 텍스트
      </button>
    </TextAdd>
  );
}

export default AddText;
