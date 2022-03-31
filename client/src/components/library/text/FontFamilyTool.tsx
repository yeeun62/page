import { useState } from "react";
import styled from "styled-components";
import { FontBundle } from "../../../files/FontBundle";

const FontFamilyWrap = styled.div`
  position: relative;
  margin-bottom: 1rem;

  input {
    width: 100%;
    height: 2.2rem;
    padding: 0.5rem;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 0.2rem;
  }

  #ffList {
    position: absolute;
    font-size: 2rem;
    right: 0.5rem;
    top: -0.2rem;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: 2.1rem;
    width: 100%;
    border: 1px solid #ddd;
    border-bottom-left-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
    background-color: #fff;
    z-index: 1;

    li {
      line-height: 1.5rem;
      cursor: pointer;
      padding: 0.2rem;
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
    if (obj) {
      obj.fontFamily = ff;
      canvasState.renderAll();
    }
  };

  return (
    <FontFamilyWrap>
      <input
        type="text"
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
          {FontBundle.map((ff) => {
            return (
              <li
                key={ff.en}
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
