import styled from "styled-components";
import { fabric } from "fabric";
import FontFamilyTool from "./tools/FontFamilyTool";
import FontSizeTool from "./tools/FontSizeTool";
import FontStyleTool from "./tools/FontStyleTool";

const TextWrap = styled.div`
  width: 100%;
  flex-direction: column;

  .textTool {
    width: 100%;
    flex-direction: column;
  }
`;

const AddText = styled.div`
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
      <div className="textTool">
        <FontFamilyTool canvasState={canvasState} />
        <div>
          <FontSizeTool canvasState={canvasState} />
          <FontStyleTool canvasState={canvasState} />
        </div>
      </div>
    </TextWrap>
  );
}

export default Text;
