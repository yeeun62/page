import { useEffect, useState } from "react";
import styled from "styled-components";
import { background } from "../../../recycleStyle";

const FontStyleWrap = styled.div`
  width: 70%;
  font-size: 1.5rem;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
      cursor: pointer;

      .styleBtn {
        display: block;
        line-height: 2.4rem;
        text-align: center;
        width: 2.2rem;
        height: 2.2rem;
        color: #333;
      }

      p {
        :hover {
          background-color: #eee;
          border-radius: 0.2rem;
        }
      }
    }
  }
`;

function FontStyleTool({ canvasState }: any) {
  const [fontStyle, setFontStyle] = useState<number>(0);
  const [italic, setItalic] = useState<boolean>(false);
  const [underLine, setUnderLine] = useState<boolean>(false);

  useEffect(() => {
    if (canvasState) {
      canvasState.on("mouse:down", () => {
        const items = canvasState.getActiveObjects();
        if (items.length) {
          console.log(items);
          setFontStyle(items[0].fontWeight);
          if (items[0].fontStyle === "italic") {
            setItalic(true);
          }
          if (items[0].underline) {
            setUnderLine(true);
          }
        } else {
          setFontStyle(0);
          setItalic(false);
          setUnderLine(false);
        }
      });
    }
  }, [canvasState]);

  function fontWeightHandler(weight: number) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      setFontStyle(weight);
      obj.fontWeight = weight;
      canvasState.renderAll();
    }
  }

  function fontDecoHandler(attr: string) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      if (attr === "italic") {
        setItalic(!italic);
        if (obj.fontStyle === "italic") {
          obj.fontStyle = "normal";
          canvasState.renderAll();
        } else {
          obj.fontStyle = "italic";
          canvasState.renderAll();
        }
      } else if (attr === "underline") {
        console.log(obj);
        setUnderLine(!underLine);
        if (obj.underline) {
          obj.underline = false;
          obj.fontSize = obj.fontSize + 1;
          canvasState.renderAll();
        } else {
          obj.underline = true;
          obj.fontSize = obj.fontSize - 1;
          canvasState.renderAll();
        }
      }
    }
  }

  return (
    <FontStyleWrap>
      <ul>
        <li
          onClick={() => fontWeightHandler(800)}
          style={fontStyle === 800 ? background[0] : background[1]}
        >
          <p className="styleBtn" style={{ fontWeight: "800" }}>
            B
          </p>
        </li>
        <li
          onClick={() => fontWeightHandler(500)}
          style={fontStyle === 500 ? background[0] : background[1]}
        >
          <p className="styleBtn" style={{ fontWeight: "500" }}>
            R
          </p>
        </li>
        <li
          onClick={() => fontWeightHandler(300)}
          style={fontStyle === 300 ? background[0] : background[1]}
        >
          <p className="styleBtn" style={{ fontWeight: "400" }}>
            L
          </p>
        </li>
        <li
          onClick={() => fontDecoHandler("italic")}
          style={italic ? background[0] : background[1]}
        >
          <p>
            <i className="styleBtn">I</i>
          </p>
        </li>
        <li
          onClick={() => fontDecoHandler("underline")}
          style={underLine ? background[0] : background[1]}
        >
          <p className="styleBtn" style={{ textDecoration: "underline" }}>
            U
          </p>
        </li>
      </ul>
    </FontStyleWrap>
  );
}

export default FontStyleTool;
