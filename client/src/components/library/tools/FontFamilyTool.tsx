import { useState } from "react";
import styled from "styled-components";
import { FontBundle } from "../../../files/FontBundle";

const FontFamilyWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  input {
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    font-size: 16px;
  }

  #ffList {
    position: absolute;
    font-size: 2rem;
    right: 25px;
    top: -5px;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 2rem;
    width: 100%;
    padding: 0.7rem 0;
    border: 1px solid #ddd;
    background-color: #fff;
    z-index: 20;

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

function FontFamilyTool({ canvasState }: any) {
  const [fontFamily, setFontFamily] = useState("");
  const [ffOpen, setFfOpen] = useState(false);

  const fontFamilyHandler = (ff: string) => {
    let obj = canvasState.getActiveObject();
    if (Object.values(obj).length) {
      obj.fontFamily = ff;
      canvasState.renderAll();
    } else {
      return null;
    }
  };

  return (
    <FontFamilyWrap>
      <input
        type="search"
        value={fontFamily}
        placeholder="글씨체 변경하기"
        onChange={(e) => setFontFamily(e.target.value)}
        onClick={() => setFfOpen(!ffOpen)}
      />
      <i id="ffList" onClick={() => setFfOpen(!ffOpen)}>
        ⇳
      </i>
      {ffOpen && (
        <ul>
          {FontBundle.map((ff, i) => {
            return (
              <li
                key={i}
                style={{ fontFamily: ff.en }}
                onClick={() => {
                  fontFamilyHandler(ff.en);
                  setFontFamily(ff.kr);
                }}
              >
                {ff.kr}
              </li>
            );
          })}
        </ul>
      )}
    </FontFamilyWrap>
  );
}

export default FontFamilyTool;
