import { useState } from "react";
import styled from "styled-components";

const FontSizeWrap = styled.div`
  position: relative;
  width: 30%;

  .fontSizeInput {
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    font-size: 16px;
  }

  #fsList {
    position: absolute;
    font-size: 2rem;
    right: 0;
    top: -5px;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 2rem;
    width: 100%;
    padding-top: 0.5rem;
    border: 1px solid #ddd;
    background-color: #fff;

    li {
      width: 90%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 1rem;
      margin: auto;
      cursor: pointer;
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
    if (Object.values(obj).length) {
      obj.fontSize = Number(size);
      canvasState.renderAll();
    } else {
      return null;
    }
  };
  return (
    <FontSizeWrap>
      <input
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
