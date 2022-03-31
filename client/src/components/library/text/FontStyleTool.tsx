import styled from "styled-components";
import { fabric } from "fabric";

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
        width: 2.2rem;
        height: 2.2rem;
        line-height: 2.4rem;
        text-align: center;
        color: #333;
      }

      :hover {
        background-color: #eee;
        border-radius: 0.2rem;
      }
    }
  }
`;

function FontStyleTool({ canvasState }: any) {
  function fontWeightHandler(weight: number) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      obj.fontWeight = weight;
      canvasState.renderAll();
    }
  }

  function fontDecoHandler(attr: string) {
    let obj = canvasState.getActiveObject();
    if (obj) {
      if (attr === "italic") {
        if (obj.fontStyle === "italic") {
          obj.fontStyle = "normal";
          canvasState.renderAll();
        } else {
          obj.fontStyle = "italic";
          canvasState.renderAll();
        }
      } else if (attr === "underline") {
        var underlineText = new fabric.Textbox("I'm an underlined text", {
          underline: true,
        });
        canvasState.add(underlineText);
        canvasState.renderAll();

        if (obj.underline) {
          obj.underline = false;
          canvasState.renderAll();
        } else {
          obj.underline = true;
          canvasState.renderAll();
        }
      }
    }
  }

  return (
    <FontStyleWrap>
      <ul>
        <li onClick={() => fontWeightHandler(800)}>
          <p className="styleBtn" style={{ fontWeight: "800" }}>
            B
          </p>
        </li>
        <li onClick={() => fontWeightHandler(500)}>
          <p className="styleBtn" style={{ fontWeight: "500" }}>
            R
          </p>
        </li>
        <li onClick={() => fontWeightHandler(200)}>
          <p className="styleBtn" style={{ fontWeight: "300" }}>
            L
          </p>
        </li>
        <li onClick={() => fontDecoHandler("italic")}>
          <i className="styleBtn">I</i>
        </li>
        <li onClick={() => fontDecoHandler("underline")}>
          <p className="styleBtn" style={{ textDecoration: "underline" }}>
            U
          </p>
        </li>
      </ul>
    </FontStyleWrap>
  );
}

export default FontStyleTool;
