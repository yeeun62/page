import styled from "styled-components";
import { Padding } from "../../../recycleStyle";
import { fabric } from "fabric";

const TextAdd = styled(Padding)`
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
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
    font-weight: 600;
  }
`;

function AddText({ canvasState }: any) {
  const addText = (weight: number, size: number, text: string) => {
    let canvasText = new fabric.Textbox(text, {
      fontWeight: weight,
      fontSize: size,
    });
    return canvasState.add(canvasText);
  };

  return (
    <TextAdd>
      <p className="libraryTitle">텍스트 추가</p>
      <button
        className="titleTxt"
        onClick={() => addText(600, 48, "제목텍스트")}
      >
        제목 텍스트
      </button>
      <button
        className="subtitleTxt"
        onClick={() => addText(600, 30, "부제목텍스트")}
      >
        부제목 텍스트
      </button>
      <button
        className="mainTxt"
        onClick={() => addText(600, 16, "본문텍스트")}
      >
        본문 텍스트
      </button>
    </TextAdd>
  );
}

export default AddText;
