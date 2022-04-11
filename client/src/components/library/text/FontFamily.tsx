import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontFamilyBundle } from "../../../files/FontBundle";
import { LibUlList } from "../../../recycleStyle";

const FontFamilyWrap = styled(LibUlList)`
  margin-bottom: 1rem;

  #ffList {
    position: absolute;
    font-size: 1.8rem;
    color: #9c9c9c;
    right: 0.5rem;
    top: -0.2rem;
    cursor: pointer;
  }

  li {
    padding: 0.2rem;
  }
`;

function FontFamily({ canvasState }: any): React.ReactElement {
  const [fontFamily, setFontFamily] = useState<string>("글씨체 변경하기");
  const [fontOpen, setFontfOpen] = useState<boolean>(false);

  useEffect(() => {
    if (canvasState) {
      canvasState.on("mouse:down", () => {
        const items = canvasState.getActiveObjects();
        if (items.length) {
          FontFamilyBundle.forEach((family) => {
            if (family.en === items[0].fontFamily) {
              setFontFamily(family.kr);
              return;
            }
          });
        } else {
          setFontFamily("글씨체 변경하기");
          setFontfOpen(false);
        }
      });
    }
  }, [canvasState]);

  const fontFamilyHandler = (font: string) => {
    const obj = canvasState.getActiveObject();
    if (obj) {
      obj.fontFamily = font;
      canvasState.renderAll();
    } else {
      setFontFamily("글씨체 변경하기");
      setFontfOpen(false);
    }
  };

  return (
    <FontFamilyWrap zIndex="2">
      <input
        type="text"
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        onClick={() => setFontfOpen(!fontOpen)}
      />
      <i id="ffList" onClick={() => setFontfOpen(!fontOpen)}>
        ⇳
      </i>
      {fontOpen && (
        <ul>
          {FontFamilyBundle.map((font) => {
            return (
              <li
                key={font.en}
                style={{ fontFamily: font.en }}
                onClick={() => {
                  if (canvasState.getActiveObject()) {
                    fontFamilyHandler(font.en);
                    setFontFamily(font.kr);
                  }
                }}
              >
                {font.kr}
              </li>
            );
          })}
        </ul>
      )}
    </FontFamilyWrap>
  );
}

export default FontFamily;
