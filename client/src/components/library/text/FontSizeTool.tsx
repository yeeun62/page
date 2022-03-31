import { useState } from "react";
import styled from "styled-components";

const FontSizeWrap = styled.div`
  position: relative;
  width: 30%;

  .fontSizeInput {
    width: 100%;
    height: 2.2rem;
    padding: 0.5rem;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
  }

  #fsList {
    position: absolute;
    font-size: 1.7rem;
    right: 0.5rem;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 2rem;
    width: 100%;
    border: 1px solid #ddd;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    background-color: #fff;

    li {
      line-height: 1.5rem;
      cursor: pointer;
      padding-left: 0.4rem;
    }

    li:hover {
      background-color: #eee;
    }
  }
`;

function FontSizeTool({ canvasState }: any) {
  const [fontSize, setFontSize] = useState("");
  const [sizeOpen, setSizeOpen] = useState(false);

  const fontSizeHandler = (size: string) => {
    setFontSize(size);
    let obj = canvasState.getActiveObject();
    if (obj) {
      obj.fontSize = Number(size);
      canvasState.renderAll();
    }
  };

  return (
    <FontSizeWrap>
      <input
        type="text"
        className="fontSizeInput"
        value={fontSize}
        placeholder="글씨 크기"
        onChange={(e) => setFontSize(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") fontSizeHandler(fontSize);
        }}
        onClick={() => setSizeOpen(!sizeOpen)}
      />
      <i id="fsList" onClick={() => setSizeOpen(!sizeOpen)}>
        ⇳
      </i>
      {sizeOpen && (
        <ul>
          <li onClick={() => fontSizeHandler("7")}>7</li>
          <li onClick={() => fontSizeHandler("10")}>10</li>
          <li onClick={() => fontSizeHandler("12")}>12</li>
          <li onClick={() => fontSizeHandler("15")}>15</li>
          <li onClick={() => fontSizeHandler("20")}>20</li>
          <li onClick={() => fontSizeHandler("30")}>30</li>
          <li onClick={() => fontSizeHandler("40")}>40</li>
          <li onClick={() => fontSizeHandler("50")}>50</li>
          <li onClick={() => fontSizeHandler("60")}>60</li>
          <li onClick={() => fontSizeHandler("100")}>100</li>
        </ul>
      )}
    </FontSizeWrap>
  );
}

export default FontSizeTool;
