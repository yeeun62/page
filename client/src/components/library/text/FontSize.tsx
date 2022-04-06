import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontSize } from "../../../files/FontBundle";
import { LibUlList } from "../../../recycleStyle";

const FontSizeWrap = styled(LibUlList)`
  width: 30%;

  #fsList {
    position: absolute;
    font-size: 1.7rem;
    right: 0.5rem;
    cursor: pointer;
  }

  li {
    padding-left: 0.4rem;
  }
`;

function FontSizeTool({ canvasState }: any) {
  const [fontSize, setFontSize] = useState<string | number>("글씨 크기");
  const [sizeOpen, setSizeOpen] = useState(false);

  useEffect(() => {
    if (canvasState) {
      canvasState.on("mouse:down", () => {
        const items = canvasState.getActiveObjects();
        if (items.length) {
          setFontSize(items[0].fontSize);
        } else {
          setFontSize("글씨 크기");
        }
      });
    }
  }, [canvasState]);

  const fontSizeHandler = (size: number) => {
    setFontSize(size);
    let obj = canvasState.getActiveObject();
    if (obj) {
      obj.fontSize = size;
      canvasState.renderAll();
    } else {
      setFontSize("글씨 크기");
      setSizeOpen(false);
    }
  };

  return (
    <FontSizeWrap zIndex="1">
      <input
        type="text"
        className="fontSizeInput"
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") fontSizeHandler(Number(fontSize));
        }}
        onClick={() => setSizeOpen(!sizeOpen)}
      />
      <i id="fsList" onClick={() => setSizeOpen(!sizeOpen)}>
        ⇳
      </i>
      {sizeOpen && (
        <ul>
          {FontSize.map((size) => {
            return (
              <li key={size} onClick={() => fontSizeHandler(size)}>
                {size}
              </li>
            );
          })}
        </ul>
      )}
    </FontSizeWrap>
  );
}

export default FontSizeTool;
