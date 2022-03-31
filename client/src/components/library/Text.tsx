import styled from "styled-components";
import { Padding } from "../../recycleStyle";
import { fabric } from "fabric";
import ColorTool from "./tools/ColorTool";
import FontFamilyTool from "./tools/text/FontFamilyTool";
import FontSizeTool from "./tools/text/FontSizeTool";
import FontStyleTool from "./tools/text/FontStyleTool";
import TextAlign from "./tools/text/TextAlign";
import TextRGBA from "./tools/text/TextOpacity";
import "./tools/text/font.css";

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-direction: column;
`;

const AddText = styled(Padding)`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  p {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.4rem;
  }

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

const EditText = styled(Padding)`
  width: 100%;
  flex-direction: column;
`;

function Text({ canvasState }: any) {
  const addText = (weight: number, size: number, text: string) => {
    let canvasText = new fabric.Textbox(text, {
      fontWeight: weight,
      fontSize: size,
    });
    return canvasState.add(canvasText);
  };

  return (
    <TextWrap>
      <AddText>
        <p>텍스트 추가</p>
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
      </AddText>
      <ColorTool canvasState={canvasState} />
      <EditText>
        <FontFamilyTool canvasState={canvasState} />
        <div>
          <FontSizeTool canvasState={canvasState} />
          <FontStyleTool canvasState={canvasState} />
        </div>
        <TextAlign canvasState={canvasState} className="alignAndRgba" />
        <TextRGBA canvasState={canvasState} />
      </EditText>
    </TextWrap>
  );
}

export default Text;
